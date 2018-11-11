import React from 'react'
import { Link, withRouteData } from 'react-static'
import Alumni from './Alumni'

const Home = withRouteData(({ alumni }) => {
  console.log(alumni)
  return (
    <div className="">
      <section className="min-h-screen pt-16 pb-24 flex flex-col justify-center items-center">
        <div className="container lg:w-1/2">
          <h1 className="section-heading text-center mb-6">
            The mastodon network that connected the Dwarves society.
          </h1>
        </div>
        <div className="text-center">
          <a
            href="https://daf.ug"
            target="_blank"
            rel="noopener noreferrer"
            className="btn bg-primary text-white"
          >
            Join us
          </a>
        </div>
      </section>
      <Alumni className="py-8" />
      {/* <div className="container max-w-lg"> */}
      {/*   <div className="row flex"> */}
      {/*     <div className="col w-full"> */}
      {/*       <ul className="list-reset"> */}
      {/*         {alumni.map((e, i) => ( */}
      {/*           <li key={i} className="mb-6 text-left text-lg"> */}
      {/*             <div> */}
      {/*               <Link */}
      {/*                 to={e.slug} */}
      {/*                 className="text-xl text-blue mr-3 hover:underline" */}
      {/*               > */}
      {/*                 {e.name} */}
      {/*               </Link> */}
      {/*               {(e.links || []).map(({ link = {} }, index) => ( */}
      {/*                 <small key={index}> */}
      {/*                   <a */}
      {/*                     href={link.url} */}
      {/*                     target="_blank" */}
      {/*                     rel="noopener noreferrer" */}
      {/*                     className="text-indigo-light" */}
      {/*                   > */}
      {/*                     {index !== 0 ? ' · ' : ''} */}
      {/*                     {link.name} */}
      {/*                   </a> */}
      {/*                 </small> */}
      {/*               ))} */}
      {/*             </div> */}
      {/*             <div className="leading-none"> */}
      {/*               {(e.tags || []).filter(Boolean).map((tag, index) => ( */}
      {/*                 <small key={index}> */}
      {/*                   {index !== 0 ? ' · ' : ''} */}
      {/*                   {tag} */}
      {/*                 </small> */}
      {/*               ))} */}
      {/*             </div> */}
      {/*           </li> */}
      {/*         ))} */}
      {/*       </ul> */}
      {/*     </div> */}
      {/*   </div> */}
      {/* </div> */}
    </div>
  )
})

export default Home
