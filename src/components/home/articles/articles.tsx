import { BlogArticle } from "../blog-article/blog-article";
import { SubscribeArticle } from "../subscribe-article/subscribe-article";

export function Articles(): JSX.Element {
  return (
    <section className="articles">
      <BlogArticle/>
      <SubscribeArticle/>
    </section>
  )
}
