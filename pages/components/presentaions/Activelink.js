import { useRouter } from 'next/router';

export default function Activelink({children, href}){
    const router = useRouter();
    const style = {
        color: router.pathname === href ? '#007bff' : 'black',
    }
    const handleClick = (e) => {
        e.preventDefault();
        router.push(href);
    }
    return(
        <a href={href} onClick={handleClick} style={style} className={styled.navLink}>
            {children}
        </a>
    )

}