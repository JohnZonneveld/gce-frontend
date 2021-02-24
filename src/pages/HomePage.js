import React from 'react';
import CogLogo from '../components/cogLogo'
import ColoredLine from '../components/coloredLine'

export default function HomePage() {
    return (
        
        <div className="content">

            <h1>The GTR Club Europe administers this European COG area <CogLogo /></h1>
            < ColoredLine color="#2F9B30" />

            <p>This is where GCE (or COG) members and Kawasaki GTR (or Concours)1000/1400 owners living or travelling in Europe, can find up to date information about:</p>
            <p>Advanced usage#</p>
<p>See the Bootstrap docs for more advanced use cases and details about customizing stylesheets.</p>

<p>Themes#</p>
<p>React-Bootstrap is compatible with existing Bootstrap themes. Just follow the installation instructions for your theme of choice.</p>

<p>Watch out!</p>
<p>Because React-Bootstrap completely reimplements Bootstrap's JavaScript, it's not automatically compatible with themes that extend the default JavaScript behaviors.</p>

<p>Create React App</p>
If you would like to add a custom theme on your app using Create React App, they have additional documentation for Create React App and Bootstrap here

Browser support#
We aim to support all browsers supported by both React and Bootstrap.

        </div>

    );

}