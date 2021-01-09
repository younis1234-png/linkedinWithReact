import React from 'react'
import "./Widgets.css"
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets ()
{
    const newsArticle = ( heading, subtitle ) =>
    (
        <div className="widgets__article">
            <div className="widgets__articleLeft">
                <FiberManualRecordIcon />
            </div>
            <div className="widgets__articleRight">
                <h4>{heading }</h4>
                <p>{subtitle }</p>
            </div>
            
        </div>
    )

    return (
        <div className="widgets">
            {/* <h1>widgets</h1> */ }
            <div className="widgets__header">
                <h2>LinkedIn News</h2>
                <InfoIcon />
            </div>
            
            {newsArticle("Coronavirus: Canada updates", "Top news - 886 readers")}
            {newsArticle("NBA", "Top news - 999 readers")}
            {newsArticle("Tesla hits new highs", "Car & Auto - 999 readers")}
            {newsArticle("Bitcoin Breaks $22k", "Crypto - 999 readers")}
            {newsArticle("Is Redux Too Good?", "Code - 999 readers")}
            {newsArticle( "Uottawa news", "Top news - 999 readers" ) }
            {newsArticle("Younis Saleh is back", "Top news - 999 readers")}
        </div>
    )
}

export default Widgets
