## Ion React Scrollbar
This is an ultra-lightweight package to go with ionic react, to style the scrollbar. The ion-content scrollbar seems to be very stubborn to style when it's being used in browser. On mobile, the browser gives it default styling.

## Usage
Just call `setScrollStyle` method after importing it into your file.

## Parameters
There are two parameters to be passed into this method. One is the `ref` object of the ion-content element and second is the option style string.

## Example
`<IonContent ref={contentRef => setScrollStyle(contentRef)}> ... </IonContent>`. <br>
You can optionally pass a second parameter of style string. It is the exact style that you right inside a css file. Just pass it as a string.