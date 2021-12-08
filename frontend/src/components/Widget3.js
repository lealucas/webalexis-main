
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import axios from 'axios';


// http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c727862adc9a47f795b7a3ab8b4e0c02

class Widget3 extends React.Component 
{
/*
  constructor(props)
  {
       super(props);
       this.state = {

        "count": 0,

        user: {

            
            "articles" : 
            [ 
                {
                    "source": {"id":null,"name":"CNBC"},
                    "author":"Lauren Thomas",
                    "title":"Black Friday 2020 online shopping surges 22% to record $9 billion, Adobe says - CNBC",
                    "description":"Consumers spent $9 billion on the web the day after Thanksgiving, up 21.6% year over year, according to Adobe.",
                    "url":"https://www.cnbc.com/2020/11/28/black-friday-2020-online-shopping-surges-22percent-to-record-9-billion-adobe-says.html",
                    "urlToImage":"https://image.cnbcfm.com/api/v1/image/106803263-1606578079017-gettyimages-1229828725-_R2A9363.jpeg?v=1606578128",
                    "publishedAt":"2020-11-28 T 15:00:00 Z",
                    "content":"Spending online on Black Friday this year surged nearly 22% to hit a new record, according to data from Adobe Analytics, as the Covid pandemic pushed more people to shop from the sofa and avoid crowd… [+2245 chars]"
                },

                {
                    "source": {"id":null,"name":"New York Times"},
                    "author":"Glenn Rifkin",
                    "title":"Tony Hsieh, Longtime Chief of Zappos, Dies at 46 - The New York Times",
                    "description":"He stepped down from the online shoe retailer and assisted in revitalizing downtown Las Vegas. He died of injuries suffered in a fire.",
                    "url":"https://www.nytimes.com/2020/11/28/obituaries/tony-hsieh-dead.html",
                    "urlToImage":"https://static01.nyt.com/images/2020/11/29/multimedia/20hsieh-print1/20hsieh-image2-facebookJumbo.jpg",
                    "publishedAt":"2020-11-28 T 15:46:00 Z",
                    "content":"From $1.6 million in sales in 2000, Zappos surpassed $1 billion in revenues by 2009. In July 2009, Mr. Hsieh sold the company for $1.2 billion to Amazon.\r\nMr. Hsieh, a soft-spoken and introspective e… [+824 chars]"
                },

                {
                    "source":{"id":null,"name":"fox8.com"},
                    "author":"Associated Press",
                    "title":"Michigan Big Boy restaurant loses name after refusing to follow coronavirus restrictions - WJW FOX 8 News Cleveland",
                    "description":"Los Angeles County announced a new stay-home order Friday as coronavirus cases surged out of control in the nation’s most populous county, banning most gatherings but stopping short of a full shutdown on retail stores and other non-essential businesses.",
                    "url":"https://fox8.com/news/michigan-big-boy-restaurant-loses-name-after-refusing-to-follow-coronavirus-restrictions/",
                    "urlToImage":"https://fox8.com/wp-content/uploads/sites/12/2020/07/bigboy.jpg?w=1280",
                    "publishedAt":"2020-11-28 T 13:15:00 Z",
                    "content":"ROME (AP) Pope Francis is preparing to formally elevate 13 new cardinals, including the first African-American to receive the rank, in a ceremony marked in every way by the coronavirus pandemic: Two … [+554 chars]"
                },

                {
                    "source":{"id":"the-wall-street-journal", "name":"The Wall Street Journal"},
                    "author":"Jing Yang, Dave Sebastian",
                    "title":"China Is Ready to Restart Cruises, but Big Companies Are Left Out - The Wall Street Journal",
                    "description":"Royal Caribbean and Carnival spent the past decade carving out China’s cruise market, but can’t yet participate in its revival",
                    "url":"https://www.wsj.com/articles/china-is-ready-to-restart-cruises-but-big-companies-are-left-out-11606559435",
                    "urlToImage":"https://images.wsj.net/im-265170/social",
                    "publishedAt":"2020-11-28 T 10:30:00 Z",
                    "content":"Battered international cruise operators are keenly awaiting the reopening of the Chinese market. Theyre going to have to wait a little longer.\r\nChina is set to resume cruises in December, as its econ… [+199 chars]"},

                {
                    "source":{"id":null,"name":"Cointelegraph"},
                    "author":"Joseph Young",
                    "title":"Bitcoin analysts explain what's next in the aftermath of BTC plunging to $16.2K - Cointelegraph",
                    "description":"Analysts and traders discuss both bull and bear cases for Bitcoin after BTC's sudden price crash to $16,200",
                    "url":"https://cointelegraph.com/news/bitcoin-analysts-explain-what-s-next-in-the-aftermath-of-btc-plunging-to-16-2k",
                    "urlToImage":"https://s3.cointelegraph.com/uploads/2020-11/409c2218-60e6-4aaa-9e10-f24309af1601.jpg",
                    "publishedAt":"2020-11-28 T 10:01:53 Z",
                    "content":"The price of Bitcoin (BTC) dropped sharply on Nov. 26 following a mass sell-off from whales. Data from on-chain data firms, namely Santiment, Intotheblock, and CryptoQuant, show heightened levels of … [+7332 chars]"
                },

                {"source":{"id":null,"name":"Theguardian.comus-news"},
                "author":"Dominic Rushe, Amanda Holpuch",
                "title":"The US is on ‘inequality autopilot’ – how can Biden's treasury pick help change course? - The Guardian",
                "description":"Janet Yellen will likely be the US’s first female treasury secretary – but as Covid shutdowns loom, she will have to win Republican votes for any major initiatives",
                "url":"https://amp.theguardian.comus-news/2020/nov/28/joe-biden-janet-yellen-us-economy-coronavirus-inequality",
                "urlToImage":"https://i.guim.co.uk/img/media/32ceed44f5d593bb3748b0e82c0afe2c70012ab3/0_352_5315_3191/master/5315.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=09ee7f24265d70af38ef07beb3e0a0e9",
                "publishedAt":"2020-11-28 T 08:00:00 Z",
                "content":"Teresa Marez has never heard of Janet Yellen, likely to be the next treasury secretary of the United States. But she and millions of other Americans have a lot riding on the decisions Yellen will mak… [+8171 chars]"
                }

            ]
              
            
            }
        }
    }*/


    constructor(props)
    {
       super(props);
       this.state = {
        "count": 0,
        "articles": undefined,

       
    }
}

 getarticles()
    {
        axios.get(`http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=c727862adc9a47f795b7a3ab8b4e0c02`)
        .then(res => {
            const nvarticle = res.data;
            this.setState({ articles : nvarticle });
        })
    }   

componentDidMount() { 
        this.getarticles();
    } 
    
    render()
    {
        return(


            <div className="widget3">
                &nbsp;
                <div className="row widget3container">

                    <div className="col-3">
                    <a href={!!this.state.articles &&(this.state.articles.articles[this.state.count].url)}><img className="imgWidget3" src={!!this.state.articles &&(this.state.articles.articles[this.state.count].urlToImage)}/></a>
                    <p><i>Cliquez sur l'image pour voir l'article en entier</i></p>
                    </div>

                    <div className="col-9">
                        <h4>{!!this.state.articles &&(<>{this.state.articles.articles[this.state.count].title}</>)}</h4>
                        <p>{!!this.state.articles &&(<>{this.state.articles.articles[this.state.count].content}</>)}</p>
                        <p>Publié le  {!!this.state.articles &&(<>{this.state.articles.articles[this.state.count].publishedAt}</>)} par <i>{!!this.state.articles &&(<>{this.state.articles.articles[this.state.count].author}</>)}</i></p>
                            <div>
                                <Button variant="outline-secondary" onClick={() => this.setState({ count: Math.floor(Math.random() * 15)  })}> Changer d'article </Button>
                            </div>
                        <p></p>
                    </div>
                </div>
            </div>
            );
    }
}

export default Widget3;