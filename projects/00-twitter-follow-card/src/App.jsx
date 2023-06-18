import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { useState } from 'react'

const users =[
    {
        userName:'midudev',
        name:'Miguel Angel Duran',
        isFollowing:true
    },
    {
        userName:'pheralb',
        name:'Pablo H.',
        isFollowing:false
    },
    {
        userName:'PacoHdezs',
        name:'Paco Hdez',
        isFollowing:true

    },
    {
        userName:'TMChein',
        name:'Tomas',
        isFollowing:false
    }


]
export function App() {
    //Importante , buscamos pasar la funcion como si fuera una prop. En Javascript se puede pasar una funcion como parametro en otros lenguajes no
    // Funcion formnatUserName en la que segun el nombre de usuario dado añade una "@" delante de esta
    //const formatUserName = (userName) => `@${userName}`

    //En vez de hacerlo como el punto anterior podemos pasarlo como parametro

    const formattedUserName = (<span>@midudev</span>)
    //const midudev = { isFollowing:true, userName:'midudev' }
    //const pheralb = { isFollowing:false,userName:'pheralb' };

    const [name, setName] = useState('midudev')
    console.log('Render with name: ' , name)
    
    return (
        <section className='App'>
          {
            users.map(({ userName, name, isFollowing }) => (
              <TwitterFollowCard
                key={userName}
                userName={userName}
                initialIsFollowing={isFollowing}
              >
                {name}
              </TwitterFollowCard>
            ))
          }
        </section>
      )

        
            
            
            /* <TwitterFollowCard 
                formattedUserName = {name} 
                initialIsFollowing = {true}
                userName="midudev" 
                name="Miguel Angel Duran"
            />
            <TwitterFollowCard 
                formattedUserName = {formattedUserName} 
                initialIsFollowing = {true}
                userName="pheralb" 
                name="Pablo Hernandez"
            />
            <TwitterFollowCard 
                formattedUserName = {formattedUserName} 
                initialIsFollowing = {false}
                userName="elonmusk"
                name="Elon Musk"
            />
            <TwitterFollowCard 
                formattedUserName = {formattedUserName} 
                initialIsFollowing = {true}
                userName="vxnder" 
                name="Vanderhart"
            />

            <button onClick = { () => setName('rulothebest')}>
                Cambiar Nombre
            </button> */
}

