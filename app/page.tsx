'use client';

import { useState } from 'react';

type Platform = 'instagram' | 'twitter' | 'whatsapp';
type RatioType = 'feed-square' | 'feed-portrait' | 'feed-landscape' | 'stories' | 'single' | 'status' | 'shared';

interface PlatformConfig {
  name: string;
  ratios: { value: RatioType; label: string; ratio: string }[];
}

const platformConfigs: Record<Platform, PlatformConfig> = {
  instagram: {
    name: 'Instagram',
    ratios: [
      { value: 'feed-square', label: 'Feed - Square', ratio: '1:1' },
      { value: 'feed-portrait', label: 'Feed - Portrait', ratio: '4:5' },
      { value: 'feed-landscape', label: 'Feed - Landscape', ratio: '1.91:1' },
      { value: 'stories', label: 'Stories & Reels', ratio: '9:16' },
    ],
  },
  twitter: {
    name: 'Twitter (X)',
    ratios: [
      { value: 'single', label: 'Single Image', ratio: '16:9' },
    ],
  },
  whatsapp: {
    name: 'WhatsApp',
    ratios: [
      { value: 'status', label: 'Status (Stories)', ratio: '9:16' },
      { value: 'shared', label: 'Shared Images', ratio: '1:1' },
    ],
  },
};

export default function Home() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | ''>('');
  const [selectedRatio, setSelectedRatio] = useState<RatioType | ''>('');
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleFileSelect(file);
  };

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFileSelect(file);
  };

  const getAspectRatioValue = (ratio: string): number => {
    const [w, h] = ratio.split(':').map(Number);
    return w / h;
  };

  const processImage = async (
    imageUrl: string,
    targetRatio: number
  ): Promise<string> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = 'anonymous';
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        
        if (!ctx) {
          reject(new Error('Could not get canvas context'));
          return;
        }

        const imgAspectRatio = img.width / img.height;

        // Set canvas size to target dimensions (using high resolution)
        const maxDimension = 2000; // High quality output
        let canvasWidth: number;
        let canvasHeight: number;

        if (targetRatio >= 1) {
          // Landscape or square
          canvasWidth = maxDimension;
          canvasHeight = maxDimension / targetRatio;
        } else {
          // Portrait
          canvasHeight = maxDimension;
          canvasWidth = maxDimension * targetRatio;
        }

        canvas.width = canvasWidth;
        canvas.height = canvasHeight;

        // Fill background with white
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Calculate how to fit the entire image within the canvas
        let drawWidth: number;
        let drawHeight: number;
        let x: number;
        let y: number;

        if (imgAspectRatio > targetRatio) {
          // Image is wider than target - fit to width, add vertical borders
          drawWidth = canvas.width;
          drawHeight = canvas.width / imgAspectRatio;
          x = 0;
          y = (canvas.height - drawHeight) / 2;
        } else {
          // Image is taller than target - fit to height, add horizontal borders
          drawHeight = canvas.height;
          drawWidth = canvas.height * imgAspectRatio;
          x = (canvas.width - drawWidth) / 2;
          y = 0;
        }

        // Draw the full image centered with borders
        ctx.drawImage(
          img,
          0, 0, img.width, img.height,
          x, y, drawWidth, drawHeight
        );

        // Convert to blob and create object URL
        canvas.toBlob(
          (blob) => {
            if (blob) {
              const url = URL.createObjectURL(blob);
              resolve(url);
            } else {
              reject(new Error('Failed to create blob'));
            }
          },
          'image/png',
          0.95
        );
      };
      img.onerror = reject;
      img.src = imageUrl;
    });
  };

  const handleDownload = async () => {
    if (!previewUrl || !selectedRatio) return;

    const ratioString = availableRatios.find((r) => r.value === selectedRatio)?.ratio || '1:1';
    const targetRatio = getAspectRatioValue(ratioString);

    try {
      const processedImageUrl = await processImage(previewUrl, targetRatio);
      
      // Create download link
      const link = document.createElement('a');
      link.href = processedImageUrl;
      link.download = `waku-${selectedPlatform}-${ratioString.replace(':', '-')}-${Date.now()}.png`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      // Clean up object URL after a delay
      setTimeout(() => {
        URL.revokeObjectURL(processedImageUrl);
      }, 100);
    } catch (error) {
      console.error('Error processing image:', error);
      alert('Failed to process image. Please try again.');
    }
  };

  const availableRatios = selectedPlatform
    ? platformConfigs[selectedPlatform].ratios
    : [];

  return (
    <main className="min-h-screen py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl font-bold mb-2 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] bg-clip-text text-transparent">
            Waku
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Upload and optimize your images for social media platforms
          </p>
        </div>

        {/* Upload Section */}
        <div className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-lg p-6 sm:p-8 mb-6 border border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
            Upload Your Image
          </h2>

          {/* File Upload Area */}
          <div
            className={`relative border-2 border-dashed rounded-xl p-12 text-center transition-all ${
              dragActive
                ? 'border-[#6366f1] bg-[#6366f1]/5 dark:bg-[#6366f1]/10'
                : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
            }`}
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept="image/*"
              onChange={handleFileInput}
              className="hidden"
              id="file-upload"
            />
            <label
              htmlFor="file-upload"
              className="cursor-pointer flex flex-col items-center"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-br from-[#6366f1] to-[#8b5cf6] flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 4v16m8-8H4"
                  />
                </svg>
              </div>
              <p className="text-lg font-medium text-gray-900 dark:text-gray-100 mb-2">
                {selectedFile ? selectedFile.name : 'Click to upload or drag and drop'}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                PNG, JPG, GIF up to 10MB
              </p>
            </label>
          </div>

          {/* Platform Selection */}
          <div className="mt-6">
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Select Platform
            </label>
            <select
              value={selectedPlatform}
              onChange={(e) => {
                setSelectedPlatform(e.target.value as Platform);
                setSelectedRatio('');
              }}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#111827] text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#6366f1] focus:border-transparent transition-all"
            >
              <option value="">Choose a platform...</option>
              <option value="instagram">Instagram</option>
              <option value="twitter">Twitter (X)</option>
              <option value="whatsapp">WhatsApp</option>
            </select>
          </div>

          {/* Ratio Selection */}
          {selectedPlatform && (
            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Select Aspect Ratio
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableRatios.map((ratio) => (
                  <button
                    key={ratio.value}
                    onClick={() => setSelectedRatio(ratio.value)}
                    className={`px-4 py-3 rounded-lg border-2 text-left transition-all ${
                      selectedRatio === ratio.value
                        ? 'border-[#6366f1] bg-[#6366f1]/10 dark:bg-[#6366f1]/20'
                        : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500'
                    }`}
                  >
                    <div className="font-medium text-gray-900 dark:text-gray-100">
                      {ratio.label}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {ratio.ratio}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Preview Section */}
        {previewUrl && selectedRatio && (
          <div className="bg-white dark:bg-[#1f2937] rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-200 dark:border-gray-700">
            <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-gray-100">
              Preview
            </h2>
            <div className="flex justify-center">
              <div
                className="relative bg-white rounded-lg overflow-hidden shadow-inner border border-gray-200 dark:border-gray-600"
                style={{
                  aspectRatio: selectedRatio
                    ? getAspectRatioValue(
                        availableRatios.find((r) => r.value === selectedRatio)?.ratio || '1:1'
                      )
                    : 1,
                  maxWidth: '100%',
                  maxHeight: '600px',
                }}
              >
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Aspect Ratio: {availableRatios.find((r) => r.value === selectedRatio)?.ratio}
              </div>
              <button
                onClick={handleDownload}
                className="px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-medium rounded-lg hover:from-[#4f46e5] hover:to-[#7c3aed] transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                  />
                </svg>
                Download Image
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
