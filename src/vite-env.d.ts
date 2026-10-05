/// <reference types="vite/client" />

interface ImportMetaEnv {
  /**
   * Optional JSON endpoint for the consultation / workshop forms.
   * Example: a Formspree, Getform, Basin, Netlify Forms or Supabase edge function URL.
   */
  readonly VITE_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
