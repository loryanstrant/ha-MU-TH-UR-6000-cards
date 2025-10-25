# Thedus Font

This directory contains the **Thedus** font family, which provides an authentic retro computer terminal aesthetic for the MU/TH/UR 6000 cards.

## Font Files

- `Thedus-Condensed.otf` - Condensed variant (default)
- `Thedus-CondensedLight.otf` - Condensed light weight
- `Thedus-Wide.otf` - Wide variant
- `Thedus-WideLight.otf` - Wide light weight
- `Thedus-StencilCondensed.otf` - Condensed stencil
- `Thedus-StencilWide.otf` - Wide stencil

## Usage

The fonts are included as web fonts via `@font-face` declarations in `src/fonts.css`. To use them in your cards, override the CSS custom property:

```css
--muthur-font-family: 'Thedus', 'Courier New', monospace;
```

Or use specific variants:
```css
--muthur-font-family: 'Thedus Wide', 'Courier New', monospace;
--muthur-font-family: 'Thedus Stencil', 'Courier New', monospace;
```

## License

The Thedus font is provided for desktop commercial use. See `mother-examples/Thedus-FONT/Desktop Commercial Use License.pdf` for full licensing details.

## Integration

The font files are automatically included in the distribution build and will be available when the cards are installed via HACS or manually.

For Home Assistant themes, you can reference these fonts in your theme configuration to ensure consistency across your dashboard.
