import styled from "styled-components"

function Index() {

    const Div = styled.div`

        .title-list {

            color: #000;

            li {
                
                a {
                    width: fit-content;
                    color: #000;
                    text-decoration: none;
                    
                    &:hover {
                        text-decoration: underline;
                    }
                }
                    
                h2 {
                    display: inline-block;
                    margin: 0;
                }

                span {
                    display: inline-block;
                    margin-left: 1vw;
                }
            }
        }
    `

    const listData = [
        {text: "Free"},
        {text: "Open Source", link: "https://github.com/FranP-code/Telegram-to-Notion-Bot"},
        {text: "Unlimited"},
        {text: "Forever", secondaryText: "(while I can afford it)"}
    ]

    return (
        <Div className="index">
            <ul className="title-list">
                {
                    listData.map((obj, index) => (
                        <li key={index}>
                            {obj.link ? <a href={obj.link} children={<h2>{obj.text}</h2>}/> : <h2>{obj.text}</h2>}
                            {obj.secondaryText ? <span>{obj.secondaryText}</span> : null}
                        </li>
                    ))
                }
            </ul>
        </Div>
    )
}

export default Index