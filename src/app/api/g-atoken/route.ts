import { accTokenMemory, accountIDMemory, baseURIMemory } from "~/app/api/a-token/route";

import { accessData } from "~/public/docusign_data/access";

export async function GET(req: Request, res: Response) {
    
    console.log('entering GET function in api/g-atoken . . . ');
    console.log('globalAccessToken in g-atoken: ', accTokenMemory);
    console.log('globalAccountID in g-atoken:: ', accountIDMemory);
    console.log('globalBaseURI in g-atoken:: ', baseURIMemory);

    if (accTokenMemory !== undefined && accountIDMemory !== undefined && baseURIMemory !== undefined) {

    return Response.json({
        accessToken: accTokenMemory,
        accountID: accountIDMemory,
        baseURI: baseURIMemory,
    })
    }
    else {
        return Response.json({statusText: 'error'}, {status: 400})
    }
    
}