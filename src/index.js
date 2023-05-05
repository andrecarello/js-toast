export default function Toast(type, content, config = {}) {
  let base = {
    html: config.html,
    position: config.position || "bottom-right",
    time: config.time || 5000,
  };

  function uuid() {
    let $uuid = "",
      $ii;

    for ($ii = 0; $ii < 27; $ii++) {
      switch ($ii) {
        case 8:
        case 20:
          $uuid += "-";
          $uuid += ((Math.random() * 16) | 0).toString(16);
          break;
        case 12:
          $uuid += "-";
          $uuid += "4";
          break;
        case 16:
          $uuid += "-";
          $uuid += ((Math.random() * 4) | 8).toString(16);
          break;
        default:
          $uuid += ((Math.random() * 16) | 0).toString(16);
      }
    }
    return $uuid;
  }

  const id = () => uuid();

  const create = () => {
    const element = document.createElement("DIV");
    const position = base.position.split("-");

    element.id = "toast-" + id();

    ["toast", type, position[0], position[1]].forEach((cls) => element.classList.add(cls));

    // <div id="..." class="toast success top left"></div>
    return element;
  };

  const child = ({ tag = "div", style = false, hasContent = false, className = "" }) => {
    const element = document.createElement(tag); // <div></div>

    element.className = className; // <div class="toast"></div>
    if (style) element.style = style; // <div class="toast" style="position: relative"></div>

    if (hasContent) {
      if (base.html) element.innerHTML = content; // <div class="" style=""><div></div></div>
      else element.innerText = content; // <div class="" style="">Lívia</div>
    }

    return element;
  };

  const remove = (el) => el.remove();

  const init = () => {
    const containers = document.querySelectorAll(".toast");
    if (containers) {
      containers.forEach((element) => remove(element));
    }

    document.querySelector("body").appendChild(create());

    const container = document.querySelector('[id*="toast"]');

    container.appendChild(
      child({
        className: "toast-track",
        style: "animation: toast-width-animation " + (base.time - 400) / 1000 + "s linear",
      })
    );

    container.appendChild(
      child({
        tag: "p",
        hasContent: true,
        className: "toast-text",
      })
    );

    setTimeout(() => container.classList.add("active"), 200);
    setTimeout(() => container.classList.remove("active"), base.time - 400);
    setTimeout(() => remove(container), base.time);
  };

  init();
}
