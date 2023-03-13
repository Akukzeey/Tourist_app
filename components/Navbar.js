import {useState} from "react";
import axios from "axios";
import Link from 'next/link'
import {useEffect} from "react";
import {useRouter} from "next/router";
import searchId from "../pages/search/[searchId]";

function Navbar({setValue,setIsLoading,setSearchResults,searchResults}) {

    const [term,setTerm]=useState('')



    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid" style={{background:'black',height:'63px'}}>
                <Link className="navbar-brand" href='/' style={{color:'white'}}>Acookie Travels</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation" style={{background:"white"}}>
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex me-auto mx-auto" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>setTerm(e.target.value)} value={term}/>
                            <Link href={`/search/${term}`}>
                                <button className="btn btn-outline-success" type="submit">Search</button>
                            </Link>
                        </form>
                    <ul className="navbar-nav mb-2 mb-lg-0" style={{color:'white'}}>
                        <li className="nav-item">
                            <a className="nav-link active mx-4" aria-current="page" href="tourist-guide/components#" style={{color:'white'}}>Sign Up</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link mx-4" href="tourist-guide/components#" style={{color:'white'}}>Sign In</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar