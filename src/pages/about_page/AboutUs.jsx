// Import Style File
import "./about_page.scss";

function AboutUs() {
  return (
    <div className="about-us-page">
      <div
        className="about-hero"
        style={{
          backgroundImage:
            "url(https://klbtheme.com/bacola/wp-content/uploads/2021/08/about-header.jpg)",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
        }}
      >
        <span>About Grogin </span>

        <h1>Do You Want To Know Us?</h1>

        <p>
          Let us introduce the furnob to you briefly, so you will have a better
          understanding of our quality
        </p>
      </div>

      <div className="container">
        <div className="section-one">
          <h1>
            Pellentesque habitant morbi tristique senectus et netus et malesuada
            fames.
          </h1>

          <p>
            In hac habitasse platea dictumst. Pellentesque viverra sem nec orci
            lacinia, in bibendum urna mollis. Quisque nunc lacus, varius vel leo
            a, pretium lobortis metus. Vivamus consectetur consequat justo. Sed
            interdum nunc ut tristique congue. Quisque maximus mauris et dui
            sagittis scelerisque. Phasellus sit amet iaculis tortor. Curabitur
            rhoncus arcu rutrum, tincidunt lorem sed, pulvinar magna. Donec
            pulvinar purus eget velit bibendum faucibus.
          </p>

          <div className="images">
            <img
              src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/about-image-01.jpg"
              alt="img1..."
            />

            <img
              src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/about-image-02.jpg"
              alt="img2..."
            />
          </div>
        </div>

        <div className="section-two">
          <h1>
            Pellentesque viverra sem nec orci lacinia, in bibendum urna mollis.
          </h1>

          <p>
            Ut vitae massa a metus viverra finibus gravida at purus. Fusce quis
            rutrum lectus. Suspendisse tincidunt, lorem at cursus sodales,
            ligula arcu molestie odio, non mattis est elit et enim. Nulla non
            erat sed metus bibendum aliquam. Nunc venenatis elementum magna, sit
            amet auctor nisi. Ut vitae nunc eleifend, congue lorem consectetur,
            sodales ligula. Mauris ac nulla at risus mollis luctus lacinia vitae
            tortor. Vestibulum ut mi ut tortor maximus tristique ac in mi.
          </p>

          <p>
            Phasellus sit amet iaculis tortor. Curabitur rhoncus arcu rutrum,
            tincidunt lorem sed, pulvinar magna. Donec pulvinar purus eget velit
            bibendum faucibus. Aliquam vitae turpis hendrerit, tempus diam ac,
            fringilla ex. Proin nec ex risus. Mauris suscipit at dui ut dapibus.
            Nam ullamcorper tincidunt est, et lacinia magna congue ut.
          </p>

          <div className="image-box">
            <img
              src="https://klbtheme.com/grogin/wp-content/uploads/2023/11/about-image-03.jpg"
              alt="img..."
            />

            <div className="article">
              <p>
                Phasellus sit amet iaculis tortor. Curabitur rhoncus arcu
                rutrum, tincidunt lorem sed, pulvinar magna. Donec pulvinar
                purus eget velit bibendum faucibus. Aliquam vitae turpis
                hendrerit, tempus diam ac, fringilla ex. Proin nec ex risus.
                Mauris suscipit at dui ut dapibus. Nam ullamcorper tincidunt
                est, et lacinia magna congue ut.
              </p>

              <ul>
                <li>Maecenas id neque neque. Curabitur gravida.</li>

                <li>Donec porta dapibus mi.</li>

                <li>
                  Quisque et suscipit velit. Sed eros magna, rutrum et magna ac.
                </li>

                <li>Proin laoreet luctus felis, commodo.</li>

                <li>Fusce quis nisi sed neque.</li>
              </ul>

              <p>
                Fusce quis rutrum lectus. Suspendisse tincidunt, lorem at cursus
                sodales, ligula arcu molestie odio, non mattis est elit et enim.
                Nulla non erat sed metus bibendum aliquam. Nunc venenatis
                elementum magna, sit amet auctor nisi. Ut vitae nunc eleifend,
                congue lorem consectetur, sodales ligula. Mauris ac nulla at
                risus mollis luctus lacinia vitae tortor. Vestibulum ut mi ut
                tortor maximus tristique ac in mi
              </p>
            </div>
          </div>
        </div>

        <p>
          Ut vitae massa a metus viverra finibus gravida at purus. Fusce quis
          rutrum lectus. Suspendisse tincidunt, lorem at cursus sodales, ligula
          arcu molestie odio, non mattis est elit et enim. Nulla non erat sed
          metus bibendum aliquam. Nunc venenatis elementum magna, sit amet
          auctor nisi. Ut vitae nunc eleifend, congue lorem consectetur, sodales
          ligula. Mauris ac nulla at risus mollis luctus lacinia vitae tortor.
          Vestibulum ut mi ut tortor maximus tristique ac in mi.
        </p>

        <p>
          Phasellus sit amet iaculis tortor. Curabitur rhoncus arcu rutrum,
          tincidunt lorem sed, pulvinar magna. Donec pulvinar purus eget velit
          bibendum faucibus. Aliquam vitae turpis hendrerit, tempus diam ac,
          fringilla ex. Proin nec ex risus. Mauris suscipit at dui ut dapibus.
          Nam ullamcorper tincidunt est, et lacinia magna congue ut.
        </p>
      </div>
    </div>
  );
}

export default AboutUs;
