/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.mycompany.nodesample;

/**
 *
 * @author PBhatt
 */
public class NodeMain {
    
    public static void callMe() {
        System.out.println("CallMe() is being called. ");
    }
    
    public static void callMeWithInt(int in) {
        System.out.println("callMeWithInt() is being called. ->" + in);
    }
    
    public static void callMeWithString(String str) {
        System.out.println("callMeWithString() is being called. -> " + str);
    }
    
    public void instanceMethod(){
        System.out.println("Instance Method is being called. ") ;
    }
    
    public int instanceMethodWithReturn(){
        System.out.println("Instance Method is being called. ") ;
        return 20; 
    }
}
