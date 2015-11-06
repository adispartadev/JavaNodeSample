/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.nodesample;

import org.apache.commons.lang3.StringUtils;



/**
 *
 * @author PBhatt
 */
public class MavenMain {
    
    public String getAbbrevatedString(String str)
    {
        System.out.println("Result in Java Program = " + StringUtils.abbreviate(str, 0, 10));
        return  StringUtils.abbreviate(str, 0, 10) ;
    }
    
}
