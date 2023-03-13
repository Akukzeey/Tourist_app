import '../styles/global.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../components/Components.css'
import Head from "next/head";
import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect,useState} from "react";
import {useRouter} from "next/router";
import Loader from "../components/Loader";

function MyApp({Component, pageProps}) {
    const [searchResults,setSearchResults]=useState([])
    const router = useRouter()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        router.events.on('routeChangeStart', () => setLoading(true));
        router.events.on('routeChangeComplete', () => setLoading(false));
        router.events.on('routeChangeError', () => setLoading(false));
        return () => {
            router.events.off('routeChangeStart', () => setLoading(true));
            router.events.off('routeChangeComplete', () => setLoading(false));
            router.events.off('routeChangeError', () => setLoading(false));
        };
    }, [router.events]);


    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.min");
    }, [])




    return (
        <>
            <Head>
                <title>Acookie Travels</title>
                <meta charSet="utf-8"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="format-detection" content="telephone=no"/>
                <meta name="description" content="Your one click away to all your fav destinations"/>
                <meta name="keywords" content="tourism, travel, best, deals, whole world"/>
            </Head>
            <Navbar searchResults={searchResults} setSearchResults={setSearchResults} setIsLoading={setLoading} isLoading={loading}/>
            {
                loading ? <Loader/> :  <Component  {...pageProps}  searchResults={searchResults} />
            }
            <Footer/>
        </>
    )
}

export default MyApp
