import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    // articles = [
    //     {
    //       "source": { "id": null, "name": "Yahoo Entertainment" },
    //       "author": "Yahoo Sports Staff",
    //       "title": "NFL Hall of Fame induction ceremony 2022: Richard Seymour, Dick Vermeil, Tony Boselli get enshrined in Canton - Yahoo Sports",
    //       "description": "Watch as Dick Vermeil, Richard Seymour, Cliff Branch, LeRoy Butler and others get inducted into the Pro Football Hall of Fame.",
    //       "url": "https://sports.yahoo.com/nfl-hall-of-fame-induction-ceremony-2022-richard-seymour-dick-vermeil-tony-boselli-get-enshrined-in-canton-144807201.html",
    //       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/MUJA1CDazhZjLjOP_7jMuw--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDE-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/b5b6d7d0-1596-11ed-bf6d-ecf28cecf65e",
    //       "publishedAt": "2022-08-06T18:40:14Z",
    //       "content": "The 2022 Pro Football Hall of Fame induction ceremony is here. The ceremony which will begin at noon ET on Saturday will see six players, one coach and one official inducted into the Hall of Fame.\r\nT… [+1060 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "CBS Sports" },
    //       "author": "Chuck Booth",
    //       "title": "Everton vs. Chelsea score: Jorginho penalty carries Blues in drab opening day showdown - CBS Sports",
    //       "description": "It wasn't pretty but Chelsea got the job done",
    //       "url": "https://www.cbssports.com/soccer/news/everton-vs-chelsea-score-jorginho-penalty-carries-blues-in-drab-opening-day-showdown/live/",
    //       "urlToImage": "https://sportshub.cbsistatic.com/i/r/2022/08/06/27bea177-dee5-4a0e-8287-6a303155762f/thumbnail/1200x675/9dc5e9da4094d12d1ac59d07a81473be/untitled-design-2022-08-06t143705-893.png",
    //       "publishedAt": "2022-08-06T18:37:01Z",
    //       "content": "A clumsy penalty conceded by Abdoulaye Doucouré was the difference in the match as Chelsea defeated Everton 1-0 on opening day. Frank Lampard's side lined up well and despite being short on forwards,… [+1602 chars]"
    //     },
    //     {
    //       "source": { "id": "reuters", "name": "Reuters" },
    //       "author": null,
    //       "title": "Air strikes, rocket attacks push Israel, Gaza into second day of fighting - Reuters.com",
    //       "description": "Israeli aircraft struck in Gaza and Palestinians fired rockets deep into Israel on Saturday, a day after an Israeli operation against the Islamic Jihad militant group set off a cross-border flare-up that ended more than a year of relative calm.",
    //       "url": "https://www.reuters.com/world/middle-east/israel-gaza-fighting-spills-into-second-day-with-air-strikes-rockets-2022-08-06/",
    //       "urlToImage": "https://www.reuters.com/resizer/vr_PGepBpTmevR9hHNF4_SNr5lQ=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/FR5GGH3JZFJYFL6F66VVJRHPWI.jpg",
    //       "publishedAt": "2022-08-06T18:14:00Z",
    //       "content": "GAZA/JERUSALEM, Aug 6 (Reuters) - Israeli aircraft struck in Gaza and Palestinians fired rockets deep into Israel on Saturday, a day after an Israeli operation against the Islamic Jihad militant grou… [+4378 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Amanda Musa, CNN",
    //       "title": "Some of the approximately 1,000 people stranded at Death Valley National Park have left in spite of flooding - CNN",
    //       "description": "Death Valley National Park announced its closure Friday due to substantial flooding within the park, according to a news release.",
    //       "url": "https://www.cnn.com/2022/08/05/us/death-valley-national-park-flooding/index.html",
    //       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220805214623-03-death-valley-national-park-220805-super-tease.jpg",
    //       "publishedAt": "2022-08-06T18:11:00Z",
    //       "content": null
    //     },
    //     {
    //       "source": { "id": null, "name": "New York Times" },
    //       "author": "Mitch Smith, Julie Bosman",
    //       "title": "Indiana Passes Near-Total Abortion Ban Post-Roe - The New York Times",
    //       "description": "The law passed despite dividing Republicans. Some of them said the measure was too restrictive; others objected to limited exceptions for rape and incest.",
    //       "url": "https://www.nytimes.com/2022/08/05/us/indiana-abortion-vote.html",
    //       "urlToImage": "https://static01.nyt.com/images/2022/08/05/us/05indiana-abortion-hfo/05indiana-abortion-hfo-facebookJumbo.jpg",
    //       "publishedAt": "2022-08-06T17:57:00Z",
    //       "content": "The U.S. Supreme Court made the decision to move the abortion rights to the state level, which has peeled an onion on the details of abortion, showing layers and layers of such a difficult topic that… [+1597 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "The Guardian" },
    //       "author": "Guardian staff reporter",
    //       "title": "Senate Democrats given green light to vote on $430bn climate and tax bill - The Guardian US",
    //       "description": "Senate arbiter rules bill can bypass filibuster and be passed with simple majority, setting stage for ‘vote-a-rama’ next week",
    //       "url": "https://amp.theguardian.com/us-news/2022/aug/06/senate-democrats-climate-tax-health-spending-bill",
    //       "urlToImage": "https://i.guim.co.uk/img/media/8c12da53d33ebd85b5b7248ed1f82359548ef836/0_0_6000_3600/master/6000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=f10a7464e7ef2753323fc1ca5bfa463a",
    //       "publishedAt": "2022-08-06T17:26:00Z",
    //       "content": "US Senate Democrats on Saturday were set to push ahead on a bill that would address key elements of President Joe Bidens agenda, tackling climate change, lowering the cost of energy and senior citize… [+2733 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Daily Beast" },
    //       "author": "Emily Shugerman",
    //       "title": "12-Year-Old Archie Battersbee Dies After Being Removed From Life Support - The Daily Beast",
    //       "description": "Archie’s family lost a weeks-long court battle to continue life-saving treatment last week.",
    //       "url": "https://www.thedailybeast.com/12-year-old-archie-battersbee-dies-after-being-removed-from-life-support-mom-hollie-dance-says",
    //       "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_540,w_960,x_0,y_47/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1659803396/Archie_ylxrth",
    //       "publishedAt": "2022-08-06T16:33:20Z",
    //       "content": "Archie Battersbee, a 12-year-old boy whose parents have been fighting to keep him on life support after he fell into a coma in April, died Saturday morning after British courts ruled to suspend treat… [+2471 chars]"
    //     },
    //     {
    //       "source": { "id": "reuters", "name": "Reuters" },
    //       "author": null,
    //       "title": "Berkshire Hathaway posts massive $43.8 billion loss; operating results improve - Reuters.com",
    //       "description": "The slide in U.S. stock prices punished Berkshire Hathaway Inc's <a href=\"https://www.reuters.com/companies/BRKa.N\" target=\"_blank\">(BRKa.N)</a> bottom line in the second quarter, as the conglomerate run by billionaire Warren Buffett on Saturday reported a $4…",
    //       "url": "https://www.reuters.com/markets/europe/berkshire-hathaway-posts-huge-quarterly-loss-operating-results-improve-2022-08-06/",
    //       "urlToImage": "https://www.reuters.com/resizer/MBN79SO2tJmsglBXNcEBkP05kbI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/SX7OXGIJYZNCJOH4QH37N4JBC4.jpg",
    //       "publishedAt": "2022-08-06T16:11:00Z",
    //       "content": "Aug 6 (Reuters) - The slide in U.S. stock prices punished Berkshire Hathaway Inc's (BRKa.N) bottom line in the second quarter, as the conglomerate run by billionaire Warren Buffett on Saturday report… [+4436 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Best Life" },
    //       "author": "Michael Martin",
    //       "title": "Earth is Spinning Faster than Usual and Here's How it's Already Affected You - Best Life",
    //       "description": "If it seems the days are getting shorter; they are and have been since the...",
    //       "url": "http://bestlifeonline.com/news-earth-spinning-faster-effects/",
    //       "urlToImage": "https://bestlifeonline.com/wp-content/uploads/sites/3/2022/08/earth-space.jpg?quality=82&strip=all",
    //       "publishedAt": "2022-08-06T15:58:44Z",
    //       "content": "If it seems the days are getting shorter; they are and have been since the summer solstice in June. But the earth recently recorded its shortest day for an entirely different and unusual reasonthe ea… [+3037 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Yahoo Entertainment" },
    //       "author": "Chris Cwik",
    //       "title": "NFL training camp 2022: Steelers first-round pick Kenny Pickett listed as third QB on depth chart - Yahoo Sports",
    //       "description": "Kenny Pickett sits behind Mitchell Trubisky and Mason Rudolph on the Steelers' depth chart.",
    //       "url": "https://sports.yahoo.com/nfl-training-camp-2022-steelers-first-round-pick-kenny-pickett-listed-as-third-qb-on-depth-chart-155142496.html",
    //       "urlToImage": "https://s.yimg.com/ny/api/res/1.2/1wvCJjVPolUd1.axmGPvlA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2022-08/135e3d80-159f-11ed-993a-bb86eb5c7160",
    //       "publishedAt": "2022-08-06T15:51:42Z",
    //       "content": "The Pittsburgh Steelers released their first official depth chart Friday and fans hoping to see rookie Kenny Pickett take over immediately might be disappointed. Pickett is listed as the team's third… [+2645 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Eonline.com" },
    //       "author": "Corinne Heller",
    //       "title": "Pete Davidson's Family Celebrates Sister Casey's Graduation Amid Kim Kardashian Split - E! NEWS",
    //       "description": "Newly single Pete Davidson, whose split from Kim Kardashian was recently made public, and his family are celebrating his sister's college graduation.",
    //       "url": "https://www.eonline.com/news/1341062/pete-davidson-celebrates-sisters-graduation-amid-kim-kardashian-split",
    //       "urlToImage": "https://akns-images.eonline.com/eol_images/Entire_Site/202276/rs_1200x1200-220806083135-1200-pete-davidson-sister-casey-mom-amy-instagram-cjh-080522.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
    //       "publishedAt": "2022-08-06T15:42:00Z",
    //       "content": "Pete Davidson's family has happier things to focus on amid his split from Kim Kardashian.\r\nOn Aug. 5, hours after the former couple's breakup was made public, theSaturday Night Live alum's mother Amy… [+839 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Clare Foran and Ali Zaslav, CNN",
    //       "title": "Senate on track to take key vote Saturday to advance Democrats' sweeping health care and climate bill - CNN",
    //       "description": "The Senate is on track to take a key vote on Saturday to advance Democrats' sweeping health care and climate bill toward final passage -- and the package could pass the Senate as soon as this weekend.",
    //       "url": "https://www.cnn.com/2022/08/06/politics/senate-democrats-health-care-climate-bill-vote/index.html",
    //       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210205121011-07-chuck-schumer-file-super-tease.jpg",
    //       "publishedAt": "2022-08-06T15:06:00Z",
    //       "content": "(CNN)The Senate is on track to take a key vote on Saturday to advance Democrats' sweeping health care and climate bill toward final passage -- and the package could pass the Senate as soon as this we… [+9394 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Variety" },
    //       "author": "J. Kim Murphy",
    //       "title": "Box Office: Brad Pitt’s ‘Bullet Train’ Hits the Rails With Projected $30 Million Opening - Variety",
    //       "description": "“I think I can, I think I can… be the top movie at the box office,” says Sony’s original action movie that could. The Brad Pitt vehicle “Bullet Train” should take No. 1 on domestic charts. The film earned $12.6 million from 4,357 locations on Friday and is pr…",
    //       "url": "https://variety.com/2022/film/box-office/bullet-train-brad-pitt-easter-sunday-opening-saturday-projected-1235334968/",
    //       "urlToImage": "https://variety.com/wp-content/uploads/2022/03/Bullet-Train.jpg?w=1000",
    //       "publishedAt": "2022-08-06T15:05:00Z",
    //       "content": "“I think I can, I think I can… be the top movie at the box office,” says Sony’s original action movie that could.\r\nThe Brad Pitt vehicle “Bullet Train” should take No. 1 on domestic charts. The film … [+5052 chars]"
    //     },
    //     {
    //       "source": { "id": "the-verge", "name": "The Verge" },
    //       "author": "Cameron Faulkner",
    //       "title": "You can play through Far Cry 6 for free this weekend - The Verge",
    //       "description": "There are some great deals happening this weekend, including a free trial of Far Cry 6 for PC, Xbox, and PlayStation. You can also save big on Amazon’s Kindle Paperwhite, the Apple TV 4K, and more.",
    //       "url": "https://www.theverge.com/good-deals/2022/8/6/23293492/far-cry-6-pc-ps5-xbox-series-x-free-trial-weekend-kindle-paperwhite-apple-tv-pencil-deal-sale",
    //       "urlToImage": "https://cdn.vox-cdn.com/thumbor/WJXXaKRCe7ibKZKmBxNEd_EYsgg=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/23926948/farcry6.jpg",
    //       "publishedAt": "2022-08-06T15:00:00Z",
    //       "content": "Plus, save on Beats wireless earbuds, the lightweight LG Gram 17, and more\r\nIf you buy something from a Verge link, Vox Media may earn a commission. See our ethics statement.\r\nThis story is part of a… [+5467 chars]"
    //     },
    //     {
    //       "source": { "id": "fox-news", "name": "Fox News" },
    //       "author": "Fox News Staff",
    //       "title": "Dan Bongino: US picked the ‘worst’ option sending Pelosi to Taiwan - Fox News",
    //       "description": "\"Unfiltered\" host Dan Bongino casts doubt on Nancy Pelosi's trip to Taiwan, calling it the \"worst\" foreign policy option to deal with Chinese tensions.",
    //       "url": "https://www.foxnews.com/media/dan-bongino-us-picked-worst-option-sending-pelosi-taiwan",
    //       "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2022/08/DAN-BONGINO-FF-8-6-22.png",
    //       "publishedAt": "2022-08-06T14:48:04Z",
    //       "content": "After noting that the two leaders of the Democratic Party, President Joe Biden and House Speaker Nancy Pelosi (D-CA), are on different pages when it comes to relations with China, \"Unfiltered\" host D… [+1373 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "KABC-TV" },
    //       "author": null,
    //       "title": "Windsor Hills crash: Vigil honors victims of horrific Windsor Hills crash - KABC-TV",
    //       "description": "A somber vigil was held to honor the victims of a multi-vehicle crash in Windsor Hills that killed six people, including a pregnant woman.",
    //       "url": "https://abc7.com/windsor-hills-crash-victims-fatal-accident-collision/12104384/",
    //       "urlToImage": "https://cdn.abcotvs.com/dip/images/12104435_30578.jpg?w=1600",
    //       "publishedAt": "2022-08-06T14:41:08Z",
    //       "content": "WINDSOR HILLS, Calif. (KABC) -- A somber vigil was held Friday evening to honor the victims of a multi-vehicle crash in Windsor Hills that killed six people, including a pregnant woman who died along… [+3648 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Chloe Melas and Cheri Mossburg, CNN",
    //       "title": "Actress Anne Heche has 'long recovery ahead' after car crash - CNN",
    //       "description": "Anne Heche remains hospitalized and in intensive care after a car she was driving on Friday crashed into a residence in Los Angeles and became engulfed in flames.",
    //       "url": "https://www.cnn.com/2022/08/05/entertainment/anne-heche-car-crash/index.html",
    //       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220805185254-anne-heche-file-031222-super-tease.jpg",
    //       "publishedAt": "2022-08-06T14:13:00Z",
    //       "content": null
    //     },
    //     {
    //       "source": { "id": "usa-today", "name": "USA Today" },
    //       "author": "Ella Lee, USA TODAY",
    //       "title": "Ukraine: Amnesty International head in Ukraine quits over report - USA TODAY",
    //       "description": "Ukraine's Amnesty International chapter  head quits over report; Russia and Ukraine blame each other for nuclear plant attack and more Ukraine news.",
    //       "url": "https://www.usatoday.com/story/news/politics/2022/08/06/ukraine-amnesty-international-quits-report/10255356002/",
    //       "urlToImage": "https://www.gannett-cdn.com/presto/2022/08/04/USAT/cf9a3e4e-cd47-4efa-b105-2e64e3c1c711-AP_Russia_Ukraine_War-1.jpg?auto=webp&crop=5892,3315,x0,y0&format=pjpg&width=1200",
    //       "publishedAt": "2022-08-06T13:40:49Z",
    //       "content": "The head of Ukraine's Amnesty International chapter quit Friday after the human rights organization released a report claiming Ukrainian forces put civilians in harm's way by basing themselves in pop… [+5557 chars]"
    //     },
    //     {
    //       "source": { "id": "cnn", "name": "CNN" },
    //       "author": "Vasco Cotovio and Tim Lister, CNN",
    //       "title": "Fears for nuclear safety after shelling at Ukrainian power plant - CNN",
    //       "description": "Moscow and Kyiv on Friday accused each other of shelling the Zaporizhzhia nuclear plant, which was taken over by Russian forces in early March.",
    //       "url": "https://www.cnn.com/2022/08/06/europe/zaporizhzhia-nuclear-plant-intl/index.html",
    //       "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/220806023306-zaporizhzhia-nuclear-plant-file-super-tease.jpg",
    //       "publishedAt": "2022-08-06T13:20:00Z",
    //       "content": "(CNN)Ukrainian officials and international experts have been warning for months of the risk that fighting poses to a sprawling nuclear power plant on the banks of Dnipro River in southern Ukraine. Ea… [+4776 chars]"
    //     },
    //     {
    //       "source": { "id": null, "name": "Milwaukee Journal Sentinel" },
    //       "author": "Isaac Yu, Journal Sentinel",
    //       "title": "Five takeaways from Friday's Trump-Michels rally in Waukesha - Milwaukee Journal Sentinel",
    //       "description": "The visit came just days before a competitive GOP primary for Wisconsin governor.",
    //       "url": "https://www.jsonline.com/story/news/politics/elections/2022/08/06/trump-rally-tim-michels-waukesha-five-takeaways/10254786002/",
    //       "urlToImage": "https://www.gannett-cdn.com/presto/2022/08/06/PMJS/f7debcbf-be20-4466-b1bf-f613a5bf7af8-TRUMP_5381.JPG?auto=webp&crop=3299,1856,x0,y155&format=pjpg&width=1200",
    //       "publishedAt": "2022-08-06T13:06:00Z",
    //       "content": "WAUKESHA - Former President Donald Trump looked to boost his chosen candidate for Wisconsin governor in Milwaukee’s Republican suburbs during a rally Friday, adding pressure to a contentious primary … [+4291 chars]"
    //     }
    //   ]
    constructor(){
      super();
      this.state = {
        // articles: this.articles,
        articles: [],
        loading: false,
        page:1
      }
    }

    async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=a0fc2065dd0d4ced969d2d7cae8df8c9&page=1&pageSize=20";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({articles: parseData.articles, totalResults:parseData.totalResults})

    }

    handlePrevClick = async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a0fc2065dd0d4ced969d2d7cae8df8c9&page=${this.state.page -1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page -1,
            articles: parseData.articles
        })
    }

    handleNextClick = async ()=>{
        if ( this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=a0fc2065dd0d4ced969d2d7cae8df8c9&page=${this.state.page +1}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                page: this.state.page +1,
                articles: parseData.articles
            })
        }
    }


  render() {
    return (
      <div className='container my-3'>
            <h2>News Stack Top Headlines</h2>
            <div className="row">
                {this.state.articles.map((element)=> {
                    return <div className="col-lg-4 col-md-4 col-sm-6 col-12" key={element.url}>
                        <NewsItem  title={element.title?element.title.slice(0,38):""} description={element.description?element.description.slice(0,88):""} imageUrl={element.urlToImage} newsUrl={element.url}/>
                    </div>
                })}
            </div> 
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type='button' className='btn btn-dark' onClick={this.handlePrevClick}>&larr; Prev</button>   
                <button type='button' className='btn btn-dark' onClick={this.handleNextClick}>Next &rarr;</button>   
            </div> 
        </div>
    )
  }
}

export default News
