var update_state=function(e){var t=$("span#"+e+"country .select2").select2("val"),n=$("span#"+e+"state select.select2"),r=$("span#"+e+"state input.state_name");$.get(Spree.routes.states_search+"?country_id="+t,function(e){var t=e.states;if(t.length>0){n.html("");var i=[{name:"",id:""}].concat(t);$.each(i,function(e,t){var r=$(document.createElement("option")).attr("value",t.id).html(t.name);n.append(r)}),n.prop("disabled",!1).show(),n.select2(),r.hide().prop("disabled",!0)}else r.prop("disabled",!1).show(),n.select2("destroy").hide()})};