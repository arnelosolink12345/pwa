import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"


const IndexPage = ({ data }) => {
  return (


        <Layout>
        <Seo title="Home" />
        <h1>Osolink Solution Is The Best</h1>
        <p>Osolink Solution - Gatsby PWA To APK</p>
        <p>This is a test message.....</p>
        <h1>This is the Data that has been pulled from wordpress websites!</h1>

        <h4>PWA PAGES LINKS </h4>
        {
        data.allWpPage.edges.map(node => (

          <>
            
              <p key={node.node.title}> 

                <Link to={'/',node.node.link}>
                {node.node.title}  <br/>
                </Link>
              </p>

                
          </>
        ))
       }


    <h4>Wordpress PAGES LINKS </h4>
            {
            data.allWpPage.edges.map(node => (

              <>
                
                  <p key={node.node.title}> 

                   <a href={'http://wordpress.oso-link.com/'+node.node.link}>{node.node.title} </a>
                  </p>

                    
              </>
            ))
          }
        <StaticImage
          src="../images/oso.png"
          width={300}
          quality={95}
          formats={["AUTO", "WEBP", "AVIF"]}
          alt="A Gatsby astronaut"
          style={{ marginBottom: `1.45rem` }}
        />
        <p>
          <Link to="/page-2/">Go to page 2</Link> <br />
          <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
        </p>
        </Layout>
          )
        }

export const query = graphql`
query {
    allWpPage {
        edges {
          node {
            title
            link
          }
        }
    }
}
`

export default IndexPage
