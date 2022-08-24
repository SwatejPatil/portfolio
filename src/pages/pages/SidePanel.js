import my from '../../images/me.png';
export default function SidePanel() {
    return <>
        <br />
        <img src={my} alt="Where is my photo" width="250" height="250"></img>
        <h2 className="headings" >Swatej Patil</h2>
        <p className='side-text'>
            Dept. Computer Science & Engineering<br />
            G H Raisoni College of Engineering<br />
            Nagpur, Maharastra, India.<br />
            Ph. +91912345066<br />
            Email: swatejpatil007.com<br />
            <p className='text'>
                "Believe in yourself. You endured all that hellish training.
                You’ll be rewarded for that without question. Work to forge yourself
                like a tempered blade… and become the most resilient of all! Focus on
                what you do best!"
                <br />Jigoro Kuwajima
            </p>
        </p>

    </>


}
