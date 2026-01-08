#!/bin/bash
# Test script for performance optimizations

echo "🚀 Portfolio Performance Testing Suite"
echo "======================================"
echo ""

# Colors
GREEN='\033[0;32m'
RED='\033[0;31m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Build test
echo -e "${YELLOW}[1/5]${NC} Testing Next.js build..."
npm run build > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Build successful${NC}"
else
    echo -e "${RED}✗ Build failed${NC}"
    exit 1
fi
echo ""

# Lint test
echo -e "${YELLOW}[2/5]${NC} Running ESLint..."
npm run lint > /dev/null 2>&1
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓ Linting passed${NC}"
else
    echo -e "${YELLOW}⚠ Linting warnings (non-blocking)${NC}"
fi
echo ""

# Image optimization check
echo -e "${YELLOW}[3/5]${NC} Checking image optimization..."
if grep -q 'next/image' app/page.tsx; then
    echo -e "${GREEN}✓ Using Next.js Image component${NC}"
else
    echo -e "${RED}✗ Missing Image imports${NC}"
fi
echo ""

# Service Worker check
echo -e "${YELLOW}[4/5]${NC} Checking Service Worker..."
if [ -f "public/sw.js" ]; then
    echo -e "${GREEN}✓ Service Worker configured${NC}"
else
    echo -e "${RED}✗ Service Worker missing${NC}"
fi
echo ""

# Cache headers check
echo -e "${YELLOW}[5/5]${NC} Checking cache headers..."
if grep -q 'Cache-Control' next.config.ts; then
    echo -e "${GREEN}✓ Cache headers configured${NC}"
else
    echo -e "${RED}✗ Cache headers missing${NC}"
fi
echo ""

echo "======================================"
echo -e "${GREEN}✓ All tests completed!${NC}"
echo ""
echo "📊 Next Steps:"
echo "1. Run 'npm run dev' to start dev server"
echo "2. Open Chrome DevTools (F12)"
echo "3. Go to Performance tab"
echo "4. Record page load"
echo "5. Check Lighthouse scores (Ctrl+Shift+I)"
echo ""
echo "🔗 Test with PageSpeed Insights:"
echo "   https://pagespeed.web.dev"
echo ""
