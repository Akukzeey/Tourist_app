import styles from '../styles/Home.module.css'
import axios, {request} from 'axios'
import Posts from "../components/Posts";
import Link from 'next/link'


function HomePage({posts,isLoading}) {


  return(
      <div style={{minHeight: '100%',
        marginBottom: '-100px',
        paddingBottom: '100px'}}>
        <div className={styles.mainImg}>
          <div>
            <h1>Acookie Travels</h1>
            <p style={{marginTop:'10px'}}>Your one stop platform for all your tourism needs</p>
          </div>
        </div>
        <div style={{margin:'100px 0px 50px 0px',display:'flex', flexDirection:'column', alignItems: 'center'}}>
          <h3 className={styles.destinationHeader}>BEST PLACES TO TRAVEL</h3>
          <div className="col-9" id="feed">`
          {posts.map(
              post=>{
                const {name, address, rating, num_reviews, photo, timezone,reviews} = post.result_object
              return(
                 <Posts name={name} address={address} rating={rating} num_reviews={num_reviews} photo={photo} timezone={timezone} reviews={reviews}/>
              )
            })
          }
          </div>
        </div>
      </div>
  )
}


export default HomePage


export async function getServerSideProps() {
  let posts

  const options = {
    method: 'GET',
    url: 'https://travel-advisor.p.rapidapi.com/locations/search',
    params: {
      query: 'world',
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
    posts = raw.filter(post => post.result_type === "things_to_do")
  } catch (e) {
    posts = e
  }


  return{
    props: {
      posts
    }
  }
}