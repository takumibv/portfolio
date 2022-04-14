import { ReactElement } from "react";
import Layout from "../components/Layout";
import { NextPageWithLayout } from "./_app";

const Contact: NextPageWithLayout = () => {
  return (
    <>
      <main id="about" className="l-main l-main--child">
        <form
          method="post"
          action="https://docs.google.com/forms/d/1StnTMyI0giSy9R5fYPuJU3n6b0OksjgA0RcdW9C_4Qw/formResponse?"
        >
          <section className="section pb-0">
            <div className="container mx-auto">
              <h3 className="section__title">CONTACT</h3>
            </div>
            <div className="container mx-auto">
              <div className="row py-4">
                <div className="four columns">
                  <h4 className="sub-headline mb-2">お名前</h4>
                  <input
                    type="text"
                    autoComplete="name"
                    className="input-text"
                    name="entry.1686029864"
                    id="entry.1686029864"
                    required
                  />
                </div>
              </div>
              <div className="row py-4">
                <div className="four columns">
                  <h4 className="sub-headline mb-2">メールアドレス</h4>
                  <input
                    type="email"
                    autoComplete="email"
                    className="input-text"
                    name="entry.260377274"
                    id="entry.260377274"
                    required
                  />
                </div>
              </div>
              <div className="row py-4">
                <div className="twelve columns">
                  <h4 className="sub-headline mb-2">お問い合わせ内容</h4>
                  <textarea
                    className="input-textarea"
                    name="entry.173211727"
                    id="entry.173211727"
                    cols={10}
                    rows={8}
                    required
                  ></textarea>
                </div>
              </div>
              <div className="py-4">
                <input className="button" type="submit" value="送信" />
              </div>
            </div>
          </section>
        </form>
      </main>
    </>
  );
};

Contact.getLayout = function getLayout(page: ReactElement) {
  return <Layout title="works">{page}</Layout>;
};

export default Contact;
