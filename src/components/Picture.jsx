
export function Picture(){




    return(
        <div id="picturecontainer">
            <img id="profilePicture" src="https://scontent.fagp1-1.fna.fbcdn.net/v/t1.6435-9/94032769_129580965335688_5549469578930683904_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=gES4R1vQ4xEAX9eUKFG&_nc_ht=scontent.fagp1-1.fna&oh=00_AT_uNWr-YJYihENHR62zIcXZsS8Lj0wnVWewt3yM38stxg&oe=622E84AD"
            
            width={200}></img>
            <button >select</button>
            <input type="file" accept="image/*" id="myfile" name="myfile"></input>
        </div>
    )
}