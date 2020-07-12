
## Client

Simple menu component which configured by the file `menu-config.json`

### `menu-config` Structure

The structure of the menu-config.json is array of objects which look like this:
<br>
  `{`<br>
      `"key": "<some menu node name>", ---> required`
      &nbsp;<br>`"subMenu": []  ---> optional`
<br> `}`

- key: the name of the menu node.
- subMenu: the children of the current node, every child object should be with the same object structre as above.
