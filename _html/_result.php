<?php
	include ("_header.php");
	if (! isset($_GET['result'])) :
		$resultType = "deuce";
		$wrapperResultClass ="wrapper-result-deuce";
	else :
		$resultType = $_GET['result'];
		$wrapperResultClass ="wrapper-result-".$resultType;
	endif;
?>
<div class="wrapper gradient wrapper-result <?php print $wrapperResultClass ?>">
	<div class="main" role="main">
		<div class="main__result">
	<?php
		switch($resultType) :
			case "nkm" :
	?>	
			<div class="main__result__header">
				<img src="/images/head-nkm.png" alt="Nathalie Kosciusko-Morizet" />
			</div><!-- .main__result__header -->
			<div class="main__result__body">
				<p>		
					Vous partagez plutôt les idées <br />de <strong>Nathalie Kosciusko-Morizet</strong>
				</p>
			</div><!-- .main__result__body -->
			<div class="main__result__footer">
				<ul class="unstyled">
					<li class="bt-item"><a href="#">les réponses</a></li>
					<li class="bt-item"><a href="#">rejouer</a></li>
				</ul>
				<p>
					<a href="http://www.leparisienmagazine.fr" target="_blank"><img src="/images/logo-le-parisien-magazine.png" alt="Le parisien magazine" /></a>
				</p>
			</div><!-- .main__result__footer -->
	<?php
		break;
		case "hidalgo":
		default:
	?>
			<div class="main__result__header">
				<img src="/images/head-hidalgo.png" alt="Anne Hidalgo" />
			</div><!-- .main__result__header -->
			<div class="main__result__body">
				<p>		
					Vous partagez plutôt les idées <br />d' <strong>Anne Hidalgo</strong>
				</p>
			</div><!-- .main__result__body -->
			<div class="main__result__footer">
				<ul class="unstyled">
					<li class="bt-item"><a href="#">les réponses</a></li>
					<li class="bt-item"><a href="#">rejouer</a></li>
				</ul>
				<p>
					<a href="http://www.leparisienmagazine.fr" target="_blank"><img src="/images/logo-le-parisien-magazine.png" alt="Le parisien magazine" /></a>
				</p>
			</div><!-- .main__result__footer -->
	<?php
		break;
		case "deuce":
		default:
	?>
			<div class="main__result__header">
				<img src="/images/head-hidalgo.png" alt="Anne Hidalgo" /><img src="/images/head-nkm.png" alt="Nathalie Kosciusko-Morizet" />
			</div><!-- .main__result__header -->
			<div class="main__result__body">
				<p>		
					Vous partagez à égalité les idées <br />des <strong>deux candidates</strong>
				</p>
			</div><!-- .main__result__body -->
			<div class="main__result__footer">
				<ul class="unstyled">
					<li class="bt-item"><a href="#">les réponses</a></li>
					<li class="bt-item"><a href="#">rejouer</a></li>
				</ul>
				<p>
					<a href="http://www.leparisienmagazine.fr" target="_blank"><img src="/images/logo-le-parisien-magazine.png" alt="Le parisien magazine" /></a>
				</p>
			</div><!-- .main__result__footer -->
	<?php
		endswitch;
	?>
		</div><!-- .main__result -->
	</div><!-- .main -->
</div><!-- .wrapper -->
<?php
	include ("_footer.php");
?>
