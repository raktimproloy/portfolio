const linkHandler = (link) => {
    setTimeout(() => {
        switch (link) {
            case "facebook":
                window.open('https://www.facebook.com/raktim.proloy.3/',"_blank");
                break;
        
            case "linkedin":
                window.open('https://www.linkedin.com/in/sudipto-laskar-b85870204/',"_blank");
                break;
        
            case "google":
                window.open('https://www.google.com',"_blank");
                break;
        
            case "github":
                window.open('https://github.com/raktimproloy?tab=repositories',"_blank");
                break;
        
            default:
                break;
        }
    }, 1000);
}

export default linkHandler;