export default function Footer() {
    return (
        <footer className="page-footer purple lighten-3">
            <div class="footer-copyright">
                <div className="container">
                    © {new Date().getFullYear()} Copyright Text
                    <a 
                        className="grey-text text-lighten-4 right" 
                        href="https://github.com/kondratiev95/react-shop"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Repo
                    </a>
                </div>
            </div>
        </footer>
    )
}
 