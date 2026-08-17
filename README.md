# De escribir código a construir producto

Presentación técnica creada con [Slidev](https://sli.dev/) sobre cómo pasar de medir el avance por funcionalidades entregadas a construir producto con intención.

La charla cuestiona la idea de que desarrollar más siempre equivale a avanzar: propone validar problemas, aprender con experimentos pequeños, medir el uso real y saber detener una iniciativa cuando no aporta suficiente valor.

## Contenido

- Una web, un servicio y un producto no son lo mismo.
- El riesgo de seguir construyendo para evitar decisiones incómodas.
- Qué cambia cuando aparecen usuarios reales.
- Cómo experimentar y aprender antes de invertir en una funcionalidad.
- Cuándo cerrar una iniciativa también es una buena decisión de ingeniería.
- Cómo incorporar criterio de producto al trabajo técnico y al uso de IA.

## Requisitos

- Node.js 20.19 o superior.
- [pnpm](https://pnpm.io/).

## Desarrollo

Instala las dependencias y abre la presentación en modo desarrollo:

```bash
pnpm install
pnpm dev
```

Slidev abrirá la presentación en el navegador. El contenido principal se edita en [`slides.md`](./slides.md); los cambios se recargan automáticamente.

## Comandos disponibles

| Comando | Descripción |
| --- | --- |
| `pnpm dev` | Inicia Slidev en modo desarrollo. |
| `pnpm build` | Genera la versión estática en `dist/`. |
| `pnpm export` | Exporta la presentación a PDF. |

## Estructura

```text
slides.md                 Guion y diapositivas de la presentación
components/               Componentes Vue reutilizables de Slidev
public/images/            Imágenes y fondos utilizados en las diapositivas
snippets/                 Fragmentos de código auxiliares
pages/                    Diapositivas importables
netlify.toml              Configuración de despliegue en Netlify
vercel.json               Configuración de despliegue en Vercel
```

Las notas del ponente están incluidas como comentarios HTML dentro de `slides.md`, por lo que no se muestran durante la presentación.

## Despliegue

El proyecto ya incluye configuración para Netlify y Vercel. En ambos casos el proceso de compilación es:

```bash
npm run build
```

El directorio publicado es `dist/`. Para comprobarlo localmente antes de desplegar:

```bash
pnpm build
```

## Créditos

Presentación de José María Santos.
