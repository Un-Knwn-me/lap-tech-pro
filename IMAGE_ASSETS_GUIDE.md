# Image Assets Management Guide

This guide explains how to properly manage images and assets in your Lap Pro Tech Next.js project.

## 📁 **Directory Structure**

```
project/
├── public/
│   ├── images/              ← Main images folder
│   │   ├── hero/            ← Hero section images
│   │   │   ├── hero-bg.jpg
│   │   │   └── hero-main.png
│   │   ├── services/        ← Service-related images
│   │   │   ├── laptop-repair.jpg
│   │   │   ├── tv-repair.jpg
│   │   │   └── projector-repair.jpg
│   │   ├── team/            ← Team member photos
│   │   ├── gallery/         ← Work gallery images
│   │   └── icons/           ← Custom icons
│   ├── logos/               ← Logo variations
│   ├── favicon.ico          ← Website favicon
│   └── manifest.json        ← PWA manifest
```

## 🖼️ **How to Add Images**

### **1. Place Images in Public Directory**

- **Hero Images**: `public/images/hero/`
- **Service Images**: `public/images/services/`
- **Team Photos**: `public/images/team/`
- **Gallery Images**: `public/images/gallery/`

### **2. Reference Images in Components**

```tsx
// ✅ Correct way - using public directory
<Image src="/images/hero/hero-bg.jpg" alt="Hero Background" />;

// ❌ Wrong way - don't import from public
import heroImage from "/images/hero/hero-bg.jpg";
```

### **3. Image Optimization with Next.js Image Component**

```tsx
import Image from "next/image";

// Optimized image loading
<Image
  src="/images/services/laptop-repair.jpg"
  alt="Laptop Repair Service"
  width={400}
  height={300}
  className="rounded-lg"
  priority={true} // For above-the-fold images
/>;
```

## 📱 **Image Formats & Best Practices**

### **Supported Formats:**

- **JPG/JPEG**: Photos, complex images
- **PNG**: Images with transparency
- **SVG**: Icons, logos, simple graphics
- **WebP**: Modern, optimized format
- **AVIF**: Latest, most efficient format

### **Image Sizing Guidelines:**

- **Hero Images**: 1920x1080px (16:9 ratio)
- **Service Cards**: 400x300px (4:3 ratio)
- **Team Photos**: 300x300px (1:1 ratio)
- **Gallery Images**: 800x600px (4:3 ratio)

### **File Naming Convention:**

```
hero-background-electronics.jpg
laptop-repair-service.jpg
team-member-john-doe.jpg
gallery-work-001.jpg
```

## 🔧 **Current Image Usage**

### **Hero Section:**

- **File**: `/images/hero-bg.svg` (placeholder)
- **Usage**: Background image with electronics theme
- **Replace with**: Your actual hero background image

### **Logo:**

- **File**: `Logo.svg` (root directory)
- **Usage**: Header and footer branding
- **Status**: ✅ Already implemented

### **Google Logo:**

- **File**: Embedded SVG in Testimonials component
- **Usage**: Google Reviews branding
- **Status**: ✅ Already implemented

## 📝 **How to Replace the Hero Image**

### **Option 1: Replace the SVG Placeholder**

1. **Save your image** as `hero-bg.jpg` in `public/images/`
2. **Update the Hero component**:

```tsx
backgroundImage: "url('/images/hero-bg.jpg')";
```

### **Option 2: Add Multiple Hero Images**

1. **Create a hero folder**: `public/images/hero/`
2. **Add your images**:

   - `hero-bg.jpg` - Main background
   - `hero-electronics.jpg` - Electronics theme
   - `hero-repair.jpg` - Repair workshop theme

3. **Update the component** to use the new path:

```tsx
backgroundImage: "url('/images/hero/hero-bg.jpg')";
```

## 🚀 **Performance Tips**

### **Image Optimization:**

- **Compress images** before adding to public folder
- **Use appropriate formats** (JPG for photos, PNG for transparency)
- **Optimize dimensions** to match display size
- **Consider WebP format** for better compression

### **Loading Strategies:**

- **Hero images**: Use `priority={true}` for above-the-fold
- **Gallery images**: Use lazy loading for below-the-fold
- **Service images**: Preload critical service images

## 📋 **Next Steps**

1. **Replace the placeholder**: Add your actual hero background image
2. **Organize images**: Create subfolders for different image types
3. **Optimize images**: Compress and resize images appropriately
4. **Update components**: Reference local images instead of external URLs

## 🔍 **Troubleshooting**

### **Image Not Displaying:**

- Check file path starts with `/` (not `./`)
- Verify image exists in public folder
- Check file permissions
- Clear browser cache

### **Poor Performance:**

- Compress large images
- Use appropriate image formats
- Consider using Next.js Image component
- Implement lazy loading for non-critical images
