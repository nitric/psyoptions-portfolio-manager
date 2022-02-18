
import React, { useCallback, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import {
  LAMPORTS_PER_SOL
} from '@solana/web3.js';
import styles_header from '../styles/Header.module.scss';
import LogoImg from './Images/psyoptions-logo-light.png';
import { useConnectedWallet } from "@saberhq/use-solana";
import "../styles/Portfolio.scss";
import classNames from 'classnames';
import { Project } from '../types';
import { Box, makeStyles } from '@material-ui/core';


// - Header
// - Name
// - Description (longer) - doesnt make sense to add here
// - Token price
// - Most same stuff as card
// - Signifier if trending up/down/neutral




const HoldingHeader: React.FC<{
    project: Project;
}> = ({project}) => {
    return (
        <div className="holding-header"
            style = {{display : "flex"}}
        >
            <h1>{project.name}</h1>
            <img src = {project.logo}></img>
            <h1>{project.symbol}</h1>
            <br/>
            
               
    
        </div>
      );
};


export default HoldingHeader;
