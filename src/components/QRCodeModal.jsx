import React, { useRef } from 'react';
import { useConfig } from '../context/ConfigContext';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { X, Download, Printer, QrCode, Sparkles, ExternalLink, Smartphone } from 'lucide-react';

export default function QRCodeModal() {
  const { isQrModalOpen, setIsQrModalOpen, config } = useConfig();
  const canvasRef = useRef(null);

  if (!isQrModalOpen) return null;

  // Real configured menu URL or current origin fallback
  const menuUrl =
    config.integrations.qrMenuUrl ||
    (typeof window !== 'undefined' ? `${window.location.origin}/menu` : 'https://thetastehouse.in/menu');

  // Download QR Code as PNG image
  const handleDownloadPng = () => {
    const canvas = document.getElementById('qr-code-canvas');
    if (!canvas) return;
    const pngUrl = canvas.toDataURL('image/png');
    const downloadLink = document.createElement('a');
    downloadLink.href = pngUrl;
    downloadLink.download = `${config.business.name.replace(/\s+/g, '-').toLowerCase()}-menu-qr.png`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Download QR Code as clean SVG
  const handleDownloadSvg = () => {
    const svg = document.getElementById('qr-code-svg');
    if (!svg) return;
    const svgData = new XMLSerializer().serializeToString(svg);
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = `${config.business.name.replace(/\s+/g, '-').toLowerCase()}-menu-qr.svg`;
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  // Print Table Tent Card
  const handlePrintTentCard = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn">
      {/* Click outside to close */}
      <div className="fixed inset-0" onClick={() => setIsQrModalOpen(false)} />

      <div className="relative bg-brand-surface rounded-2xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-brand-card-border z-10 text-center space-y-6">
        {/* Close Button */}
        <button
          onClick={() => setIsQrModalOpen(false)}
          className="absolute top-4 right-4 p-2 rounded-lg text-brand-text-muted hover:text-brand-text hover:bg-neutral-100 transition"
          aria-label="Close QR Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div>
          <div className="w-12 h-12 rounded-2xl bg-brand-primary text-white flex items-center justify-center mx-auto mb-3 shadow-md">
            <QrCode className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-brand-text font-serif">
            Dine-In Digital Table QR Code
          </h3>
          <p className="text-xs text-brand-text-muted mt-1 max-w-xs mx-auto">
            Place this QR code on dining tables or cash counter so guests can scan with their phone camera to browse the live menu.
          </p>
        </div>

        {/* Printable Tent Card Container */}
        <div
          id="printable-tent-card"
          className="p-6 rounded-2xl bg-white border-2 border-dashed border-brand-card-border shadow-xs max-w-xs mx-auto text-neutral-900 space-y-3"
        >
          <div className="font-serif font-black text-base tracking-wider uppercase text-neutral-900">
            {config.business.name}
          </div>
          <div className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">
            Scan For Digital Menu & Prices
          </div>

          {/* Genuine QR Code Rendering */}
          <div className="p-3 bg-white rounded-xl shadow-inner inline-block border border-neutral-200">
            {/* Canvas for PNG export */}
            <div className="hidden">
              <QRCodeCanvas
                id="qr-code-canvas"
                value={menuUrl}
                size={512}
                level="H"
                includeMargin={true}
              />
            </div>
            {/* SVG for sharp on-screen display & SVG export */}
            <QRCodeSVG
              id="qr-code-svg"
              value={menuUrl}
              size={180}
              level="H"
              includeMargin={true}
            />
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-neutral-700 font-semibold pt-1">
            <Smartphone className="w-3.5 h-3.5 text-brand-primary" />
            <span>Open camera & scan</span>
          </div>

          <div className="text-[10px] text-neutral-400 font-mono truncate px-2">
            {menuUrl}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2">
          <button
            onClick={handleDownloadPng}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-brand-primary text-white text-xs font-bold hover:bg-brand-primary-hover transition shadow-sm"
          >
            <Download className="w-4 h-4" />
            <span>Download PNG</span>
          </button>

          <button
            onClick={handleDownloadSvg}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-brand-card-border bg-brand-card text-brand-text text-xs font-bold hover:bg-brand-surface transition"
          >
            <Download className="w-4 h-4" />
            <span>Download SVG</span>
          </button>

          <button
            onClick={handlePrintTentCard}
            className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl bg-neutral-900 text-white text-xs font-bold hover:bg-neutral-800 transition shadow-sm"
          >
            <Printer className="w-4 h-4" />
            <span>Print Standee</span>
          </button>
        </div>

        <div className="text-[11px] text-brand-text-muted flex items-center justify-center gap-1">
          <span>Configured URL:</span>
          <a
            href={menuUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-primary hover:underline font-medium inline-flex items-center gap-0.5"
          >
            <span>{menuUrl}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
