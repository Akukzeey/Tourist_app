import { useRouter } from 'next/router'
import axios from "axios";
import Posts from "../../components/Posts";
import Search from "../../components/Search";
import {log} from "next/dist/server/typescript/utils";

const SearchResults = ({posts}) => {
    const router = useRouter()
    const { searchId } = router.query

    function toUpper() {
        let text = searchId
        let results=text.toUpperCase()
        console.log(results)

        return results
    }

    toUpper()





    const showContent = () => {
      if (posts.length>0){
          return (
              <>
              <h1>YOU ARE ONE CLICK AWAY FROM {toUpper()}</h1>
                  {
                      posts.map(
                          post=>{
                              const {name, address, rating, num_reviews, photo, timezone,reviews} = post.result_object
                              return(
                                  <Search name={name} address={address} rating={rating} num_reviews={num_reviews} photo={photo} timezone={timezone} reviews={reviews}/>
                              )
                          })
                  }
              </>

          )
      } else {
          return (
              <div className="alternate" style={{height:'100vh',display:'flex',justifyContent:'center',alignItems:'center',}}>
                  Nothing found, please try a different search term e.g. Europe, Australia, Tokyo
              </div>
          )
      }
    }




    return (
        <div className="col-9" id="feed">
            {showContent()}
        </div>
    )
}

export default SearchResults

export async function getServerSideProps(context) {
    const { params} = context;
    let posts
    const options = {
        method: 'GET',
        url: 'https://travel-advisor.p.rapidapi.com/locations/search',
        params: {
            query: `${params.searchId}`,
            limit: '30',
            offset: '0',
            units: 'km',
            location_id: '1',
            currency: 'USD',
            sort: 'relevance',
            lang: 'en_US'
        },
        headers: {
            'X-RapidAPI-Key': process.env.API_KEY,
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options)
        const raw = response.data.data
        // console.log(raw)
        posts = raw.filter(post => post.result_type === "things_to_do")
        console.log(posts)
    } catch (e) {
        posts = e
    }


    return{
        props: {
            posts
        }
    }
}