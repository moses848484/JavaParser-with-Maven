import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scanner;
public class tokken
{
    public static void main(String[] args) throws FileNotFoundException 
    {
        Scanner sc = new Scanner(new File("C:/Users/LP/Pictures/parser/AST.txt"));
        int identifier = 0;
        int operator = 0;
        int comment = 0;
        int keyword = 0;
        while (sc.hasNextLine()) 
       {
           String line = sc.nextLine();
           if (line.contains("identifier")) 
           {
                identifier++;
           }
           else if (line.contains("operator")) 
           {
               operator++;
            
           }
           else if (line.contains("comment")) 
           {
               comment++;
       }
       else if (line.contains("keyword")) 
           {
               keyword++;
       }
       System.out.println("Total tokens" + identifier);
       System.out.println("Total tokens" + operator);
       System.out.println("Total Tokens" + comment);
       System.out.println("Total Tokens" + keyword);
   }

}
}