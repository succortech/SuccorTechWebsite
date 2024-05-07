<?php
{
include('captcha-gen.php');
session_start();
$captcha = new captcha();
$_SESSION['6LehWs4pAAAAANJtBHq9YURt76R5PHaQj__ocAob'] = $captcha->getKeyString();
}
?>