import { rest } from 'msw';

export const handlers = [
    rest.get("https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",(req,res,ctx)=>{
        return res(
            ctx.status(200),
            ctx.json([
                {
                    backdrop_path:"/2Icjry0xdRSNxrtsBR1F47b9r3u.jpg",
                    title:"Meg 2: The Trench"
                },
                {
                    backdrop_path:"/jZIYaISP3GBSrVOPfrp98AMa8Ng.jpg",
                    title:"Elemental"
                }
            ])
        )
    })
]