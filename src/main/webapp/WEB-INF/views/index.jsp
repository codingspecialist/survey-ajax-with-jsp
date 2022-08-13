<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

	<%@ include file="layout/header.jsp" %>

		<div class="container">
			<br />

			<form>
				<button type="button" onclick="send()">전송</button>

				<div class="m_title">
					<input id="purpose" type="text" class="form-control" placeholder="목적" />
					<input id="title" type="text" class="form-control" placeholder="타이틀" />
				</div>
				<br />

				<div>
					파트추가 <button id="btn-add-part" class="btn btn-primary" type="button">+</button>
					<hr />
				</div>

				<div id="m-part-box">

				</div>

			</form>
		</div>



		<script src="js/test.js"></script>

		<%@ include file="layout/footer.jsp" %>