<?php
class Conection{
    public $driver;
    public $host;
    public $user;
    public $password;
    public $database;
    public $conn;

    public function __construct(){
        $this->driver="mysql";
        $this->host="localhost";
        $this->user="root";
        $this->password="";
        $this->database="login_social";

        $this->get_conection();
    }

    public function get_conection()
    {
        $this->conn = new PDO($this->driver.":"."host=" .$this->host.";"."dbname=".$this->database,$this->user,$this->password);
        if (!$this->conn){
            echo "error al conectar";
        }
        else{
            //echo "coneccion establecida";
        }
    }
      function login($email){
        $sql = "CALL email_select(?)";
        $statement = $this->conn->prepare($sql);

        $statement->bindParam(1,$email);
        

        if($statement->execute()){

            $count=$statement->rowCount();

            if($count){
                $cookie_name = "sesion";
                $cookie_value = "token";
                setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
                return true;
            }
            else{
                return false;
            }
        
        }
    }
} 


/*  $obj = new Conection();  */