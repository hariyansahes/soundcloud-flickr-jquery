<?php
//include_once("config.php");

if(isset($_POST['keyword']) && !empty($_POST['keyword']))
{

$key = strip_tags(trim($_POST['keyword']));
//$mysqli->query("INSERT INTO keyword(keyword) VALUES('$key')");//save keyword

$api_url = 'http://api.soundcloud.com/tracks.json?client_id=a7c51c4679f0d755bd4643589eac76aa&q=' . urlencode($key);
$api_content = file_get_contents($api_url);

if (!$api_content) {
       exit();
 }
            
$api_content_array = json_decode($api_content, true);

foreach ($api_content_array as $val) { ?>
<div class="videos" id="sc-<?php echo $val['id'];?>">

  <div class="details">
    <h6>
    <a class="soundcloud" id="<?php echo $val['id'].'|'.$val['genre'].'|'.$val['title'].'|'.$key;?>" href="<?php echo $val['uri'];?>">
    <?php echo $val['title'];?>
	</a>
    </h6>

    <audio src="<?php echo $val['uri'];?>/stream?consumer_key=a7c51c4679f0d755bd4643589eac76aa" type="audio/mpeg"></audio>
  </div>

</div>
<?php
 }

}
?>