# Storecove Integration Toolkit

A modern Vue.js application showcasing the Storecove e-invoicing integration toolkit for integrators and cloud accounting clients.

## Features

- **Modern Vue.js 3 Architecture**: Built with Vue 3 composition API and Vite for fast development
- **Responsive Design**: Mobile-first responsive layout that works on all devices
- **Clean UI**: Professional design inspired by modern developer documentation sites
- **Interactive Components**: Hover effects, feedback system, and smooth navigation
- **Modular Structure**: Well-organized components and styling for easy maintenance

## Project Structure

```
storecove-toolkit/
├── src/
│   ├── App.vue          # Main application component
│   ├── main.js          # Application entry point
│   └── style.css        # Global styles and CSS variables
├── index.html           # HTML template
├── package.json         # Project dependencies
├── vite.config.js       # Vite configuration
└── README.md           # This file
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Colors and Theming

The application uses CSS custom properties (variables) defined in `src/style.css`. You can easily customize the color scheme by modifying these variables:

```css
:root {
  --primary-color: #00A86B;    /* Main brand color */
  --primary-dark: #008A5A;     /* Darker shade for hover states */
  --text-dark: #1a1a1a;        /* Main text color */
  --text-medium: #4a4a4a;      /* Secondary text color */
  --text-light: #6b7280;       /* Light text color */
  --bg-gray: #f8fafc;          /* Light background */
  --border-light: #e5e7eb;     /* Border color */
  /* ... more variables */
}
```

### Content Updates

The content is defined in the Vue component's data section. To update the cards and sections:

1. Open `src/App.vue`
2. Modify the data arrays (`buildIntegrationCards`, `testIntegrationCards`, etc.)
3. Add or remove cards as needed

### Adding New Sections

To add a new section:

1. Add the HTML structure in the template
2. Add corresponding data in the Vue component
3. Follow the existing pattern for consistency

## Technical Details

### Built With

- **Vue.js 3**: Progressive JavaScript framework
- **Vite**: Next-generation frontend tooling
- **CSS Grid & Flexbox**: Modern layout techniques
- **CSS Custom Properties**: For theming and customization
- **Google Fonts**: Inter font family for modern typography

### Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

### Performance Features

- **Lazy Loading**: Images and components load as needed
- **CSS Optimization**: Minimal and optimized CSS
- **Fast Build Times**: Vite's lightning-fast HMR
- **Tree Shaking**: Unused code elimination

## Deployment

### Netlify

1. Build the project: `npm run build`
2. Deploy the `dist` folder to Netlify

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

### Traditional Hosting

1. Run `npm run build`
2. Upload the contents of the `dist` folder to your web server

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## Support

For questions or support regarding this toolkit:

- Email: apisupport@storecove.com
- Documentation: https://www.storecove.com/docs/
- Developer Portal: https://developers.storecove.com/

## License

This project is licensed under the MIT License.