// Import Style File
import "./blog_details_content.scss";

// Import Components
import Comments from "./Comments";
import LeaveComment from "./leave_comment/LeaveComment";

// Import Redux Hooks
import { useSelector } from "react-redux";

function BlogDetailsContent({ id }) {
  const blogs = useSelector((store) => {
    return store.blogs;
  });

  return (
    <div className="blog-details-content">
      <div className="details-content">
        <div className="img-box">
          <div className="date-comments">
            <span className="date">{blogs.data[id - 1].date}</span>

            <span className="comments-count">
              {blogs.data[id - 1].comments.count} Comments
            </span>
          </div>

          <img
            src={blogs.data[id - 1].img}
            alt={`img${blogs.data[id - 1].id}...`}
            loading="lazy"
          />
        </div>

        <h1 to={`/blog-details/${blogs.data[id - 1].id}`} className="title">
          {blogs.data[id - 1].title}
        </h1>

        <p>
          Bilmålvakt treskade i nibel den mobilmissbruk deren jyn nöning osk
          heterostik i rel ultran. Fälass tunekösa och tenöv servicebarn nyra om
          än muren för fönde sijyv i vobba, och hyng samt esam, plaheten.
          Polytresam iren att ora och plal fömityheten, tulogi eftersom tibesam
          ologi renat, i tiss gömivis. Supraskop prebelig för att psykolog geon
          sper brony, till teramani. Ben autovis utom prede prenerade lanas.
          Avis nykabelt beda dias messa ifall faråsade i bement i speling emedan
          beslutsblindhet bedade. Pomed kösins pseudosokanat om råd, astrovår
        </p>

        <p className="diff">
          Proneling gigaligt, timel dässade, tyv olangen tretiren förortare. Ör
          tresat högäng om rugisk deska emedan sogon, porade, vugon multing
          fonofoni värånat reras. Bevudat infrar hypossa osk krosamma antil
          oaktat soktiga utvigning var exore. Potutt vär ifall rinde att nilogi
          nöheten oaktat funktionsrätt megar för egomibel. Näfasamma visat och
          gigav hökast, pseudorade iruras och antell utan prosm por jyfise,
          reskap. Krotebel kvasitred i dibegon i anade då spegisk tranåliga.
        </p>

        <p>
          Al vår egonat däsade, selfie ifall eutren kromeskap svemester.
          Nystartsjobb prebuheten kvasivirat biore lån. Pas multir hänade sped
          porångar medan kroppsaktivism än ges trevis och epiheten, vusikase
          trilogi då planar. Pahöling jylogi och hemiling utan nölig och depol
          kringmyndighet krovis multiktig. Beling euroling svajpa, pregaligt
          vide kask, mivåck, huruvida astrobel nefäl. Egoning pretologi, krock i
          suvis gände. Pade vityst därför att epide postfaktisk och prende eller
          kvasin, sav termotologi som kaler. Kvasibel prenånde emedan nyvutujyr
        </p>

        <p className="diff">
          Plarat anaktig vårunat fatiskapet till gena turår, för att antisade i
          blogga. Tress erat oss missa makrolas laddstolpe. Telepol lar olan
          emedan antinde, att nåbel, på nyras. Planat når, men tiplask och
          astrons poning nigen antropomatisk runde fast faktaresistens,
          miföskapet. Exonar tefäv flexitarian spelig fipp sissade edevis.
          Mihyligt fär att nede, för oligen i por gemidat ber. Demiheten dore,
          begt har biskapet krong tradade fisade. Dysvision hynera våv
          migäskapet att dibel, i besarade, plus siföd för nens att miv så sede
        </p>

        <p>
          Nihet paragöl sest bede örad av sprejgodis, premona bätusade hyrösk
          engen. Dina årisamma bijysk gigartad avis om deleda i intrande antera,
          eur hypoment i renas. Tinade gäment plal ifall eunde sedan sens prer,
          larånat att låns men prede aren, plaliga fäläheten. Hyterade
          framtidsfullmakt progt mide, vint retregisk mosa vuxenvälling
          treskapet, nattborgmästare epik mena. Fotologi lara talibanisering
          efarad, inte sper prena. Nehäpp ekostat, i vånade, ponade simösm
          inödinera näsat i bioras. Kat sopspanare, fid monometer aligen.
        </p>
      </div>

      <Comments data={blogs.data[id - 1].comments} />

      <LeaveComment id={id} />
    </div>
  );
}

export default BlogDetailsContent;
