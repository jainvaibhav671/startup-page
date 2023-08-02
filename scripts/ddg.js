let ddgDiv = document.querySelector("#duckduckgo");
ddgDiv.innerHTML = ```
      
        <form
          onSubmit="return searchb()"
          id="search_form_homepage"
          class="no-menu"
          name="x"
          action="https://duckduckgo.com/"
          target="_top"
        >
          <div id="sxd"></div>
          <div id="search_wrapper_homepage">
            <input id="search_button_homepage" type="submit" value="" />
          </div>
          <input
            type="text"
            autocomplete="off"
            name="q"
            id="search_form_input_homepage"
            onFocus="if ('rc' in window) {nua('nro',rc)};fq=1;"
            onBlur="fq=0"
            onclick="if (this.value=='put search terms here') {this.value='';this.style.color='#000000';}"
            value=""
            placeholder="Search DuckDuckGo"
          />

          <script type="text/javascript">
            var tracking = new RegExp("[\?\&]t=([^\&]+)");
            var form = document.getElementById("search_form_homepage");

            if (tracking.test(window.location.href)) {
              var input = document.createElement("input");
              input.type = "hidden";
              input.name = "t";
              input.value = RegExp.$1;
              form.appendChild(input);
            }
            var karr = new Array(
              "a",
              "b",
              "c",
              "d",
              "e",
              "f",
              "g",
              "h",
              "i",
              "j",
              "k",
              "l",
              "m",
              "n",
              "o",
              "p",
              "q",
              "r",
              "s",
              "t",
              "u",
              "v",
              "w",
              "x",
              "y",
              "z",
              "1",
              "2",
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              "9",
              "aa",
              "ab",
              "ac",
              "ad",
              "ae",
              "af",
              "ag",
              "ah",
              "ai",
              "aj",
              "ak",
              "al",
              "am",
              "an",
              "ao",
              "ap",
              "aq",
              "ar",
              "as",
              "at",
              "au",
              "av",
              "aw",
              "ax",
              "ay",
              "az"
            );
            for (var i = 0; i < karr.length; i++) {
              var kre = new RegExp("[\?\&]k" + karr[i] + "=([^\&]+)");
              var ktmp = "";
              if (kre.test(window.location.href)) {
                ktmp = decodeURIComponent(RegExp.$1);
                if (ktmp.length < 11) {
                  var input = document.createElement("input");
                  input.type = "hidden";
                  input.name = "k" + karr[i];
                  input.value = ktmp;
                  form.appendChild(input);
                }
                if (karr[i] == "n" && ktmp && ktmp == "1")
                  document.x.target = "_new";
              }
            }
          </script>
        </form>
      ```

