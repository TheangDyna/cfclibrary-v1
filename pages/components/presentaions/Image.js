export default function Image({src}){
    return(
        <div>
            <img src={src} 
                style = {{
                    width: 100,
                    height: 100,
                    borderRadius: 50
                }}
            />
        </div>
    )
}