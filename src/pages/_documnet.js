import Document,{Head,Main,NextScript} from 'next/document';

export default class MyDocument extends Document{
    render(){
        return(
            <html lang="en">
                <Head>
                    <meta name="description" content="A clothing site"/>
                    <meta charSet="utf-8"/>
                    <meta name="robots" content="noindex, nofollow"/>
                    <meta name="viewport" content="width=device-width"/>
                    <link rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"/>
                    <link href="https://fonts.googleapis.com/css?family=Cinzel&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Lato&display=swap" rel="stylesheet"/>
                    <link href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:700&display=swap" rel="stylesheet"></link>
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
                
            </html>
        )
    }
    
}