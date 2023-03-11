export enum SelectedPage {
  Inicio = "inicio",
  Nosotros = "nosotros",
  NuestrosProductos = "nuestrosproductos",
  Contactanos = "contactanos",
}

export interface NosotrosType {
  icon: JSX.Element;
  title: string;
  description: string;
}

export interface NuestrosProductosType {
  name: string;
  description?: string;
  image: string;
}
