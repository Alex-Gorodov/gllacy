import { Catalog } from "../../components/catalog/catalog";
import { Layout } from "../../components/layout/layout";

export function CatalogPage(): JSX.Element {
  
  return(
    <Layout hasNav={true}>
      <main className="main catalog products">
        <Catalog/>
      </main>
    </Layout>
  )
}
