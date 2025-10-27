# Test Next.js 12 - Turtle Earn Widget

Proyecto de prueba para integrar el Earn Widget en Next.js 12.

---

## ⚠️ Problema Actual - CSS Global Import

Next.js no permite imports de CSS global desde node_modules excepto en `pages/_app.js`. El paquete `@turtleclub/earn-provider` está importando automáticamente `@rainbow-me/rainbowkit/styles.css` en su código bundleado, lo que causa el siguiente error:

```
Global CSS cannot be imported from files other than your Custom <App>
Location: node_modules/@turtleclub/earn-provider/dist/index.js
Import path: ../../../@rainbow-me/rainbowkit/dist/index.css
```

---

## 🔧 Solución a Implementar (Lunes)

### 1. Modificar `@turtleclub/earn-provider`

**Ubicación**: `/Users/amilcarrey/Documents/TURTLE/turtle-packages` (o donde esté el paquete)

**Cambios necesarios**:

1. **Remover el import automático de estilos de RainbowKit** del código fuente del paquete
   - Buscar y eliminar: `import '@rainbow-me/rainbowkit/styles.css'`
   - Este import probablemente está en el archivo principal del paquete (index.ts o similar)

2. **Actualizar la documentación del paquete** para indicar que los usuarios deben importar manualmente los estilos

3. **Rebuild del paquete** después de hacer los cambios

### 2. Actualizar la Documentación en `mintify-docs`

Agregar instrucciones claras de instalación:

#### Instalación

**1. Instalar dependencias**

```bash
npm install @turtleclub/earn-provider @turtleclub/earn-widget
```

**2. Importar estilos globales en `pages/_app.js` (Next.js)**

```jsx
// pages/_app.js
import '@rainbow-me/rainbowkit/styles.css'
import '@turtleclub/earn-widget/styles.css'
import { TurtleDefaultProvider } from '@turtleclub/earn-provider'

function MyApp({ Component, pageProps }) {
  return (
    <TurtleDefaultProvider>
      <Component {...pageProps} />
    </TurtleDefaultProvider>
  )
}

export default MyApp
```

**3. Usar el widget en cualquier página**

```jsx
import { useEarnDefaultAdapter } from '@turtleclub/earn-provider'
import { EarnWidget } from '@turtleclub/earn-widget'

function MyPage() {
  const adapter = useEarnDefaultAdapter()

  const config = {
    theme: "dark",
    campaigns: ["campaign-id"],
    // ... resto de config
  }

  return (
    <EarnWidget
      adapter={adapter}
      config={config}
      distributorId="your-distributor-id"
    />
  )
}
```

### Referencia

Esta es la práctica estándar de librerías como:
- **RainbowKit**: No importa sus propios estilos, el usuario debe hacerlo
- **Chakra UI**: Requiere import manual de estilos
- **Stripe Elements**: Similar patrón de importación manual

### Estado Actual del Proyecto

- ✅ `TurtleDefaultProvider` envuelve toda la app en `_app.js`
- ✅ Estilos de `@turtleclub/earn-widget` importados manualmente en `_app.js`
- ✅ Estilos de `@rainbow-me/rainbowkit` importados manualmente en `_app.js`
- ❌ **PENDIENTE**: Remover import automático de RainbowKit styles del paquete `@turtleclub/earn-provider`

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
