
import { match } from 'assert';
import React, { Component } from 'react'
import { Badge } from 'react-bootstrap';
import { matchCounter } from '../../types/matchCounter';

interface preferenceProps {
    match: matchCounter;
}

function Preferences(props: preferenceProps) {
  const preferences = props.match.user.preferences;
  return (
    <h5 className='preferences'>
        {

            preferences.map((preference) => {
                if(props.match.matches.includes(preference)){
                  return <Badge className="badge" bg="success">{preference}</Badge>
                }
                return <Badge className="badge" bg="secondary">{preference}</Badge>
            })
        }
    </h5>
  )
}

export default Preferences