export const GET_ORGANIZATION = (queryString,cursor)=>{
  let search=`{search(query: "${queryString}", type: REPOSITORY, first:5,after:"${cursor}") {
       repositoryCount
       pageInfo {
         endCursor
         startCursor
         hasNextPage
       }
       edges {
         node {
           ... on Repository {
             name
             id
             description
             viewerHasStarred
             viewerSubscription	
             watchers{
               totalCount
             }
             stargazers{
               totalCount
             }
             url
           }
         }
       }
     }
 }`;

 if(!cursor)
 search=search.replace(`,after:"${cursor}"`,"");
   
 return search;
}

export let STAR_TOGGLER =()=> `

  mutation ($repositoryId: ID!) {
    addStar(input:{starrableId:$repositoryId}) {
      starrable {
        viewerHasStarred
      }
    }
  }

`;

export let WATCH_TOGGLER=`
mutation UpdateWatcher($repositoryId: ID!, $subscribeState: SubscriptionState!){
  updateSubscription(input:{subscribableId:$repositoryId,state:$subscribeState}){
    subscribable{
      id
      viewerSubscription
    }
  }
  
}
`