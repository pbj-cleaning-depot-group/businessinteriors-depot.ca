
    (function() {
      var cdnOrigin = "https://cdn.shopify.com";
      var scripts = ["/cdn/shopifycloud/checkout-web/assets/c1/polyfills-legacy.CO4mfZCN.js","/cdn/shopifycloud/checkout-web/assets/c1/app-legacy.D-2qaXhJ.js","/cdn/shopifycloud/checkout-web/assets/c1/en-legacy.O3YnT9_N.js","/cdn/shopifycloud/checkout-web/assets/c1/page-OnePage-legacy.DzuK_he5.js","/cdn/shopifycloud/checkout-web/assets/c1/DeliveryMethodSelectorSection-legacy.aB-2GduN.js","/cdn/shopifycloud/checkout-web/assets/c1/useEditorShopPayNavigation-legacy.D-ZCTr7v.js","/cdn/shopifycloud/checkout-web/assets/c1/VaultedPayment-legacy.BM4vCcuj.js","/cdn/shopifycloud/checkout-web/assets/c1/LocalizationExtensionField-legacy.whb4oSOP.js","/cdn/shopifycloud/checkout-web/assets/c1/ShopPayOptInDisclaimer-legacy.FL_6kkDA.js","/cdn/shopifycloud/checkout-web/assets/c1/SeparatePaymentsNotice-legacy.B1EOQkMv.js","/cdn/shopifycloud/checkout-web/assets/c1/ShipmentBreakdown-legacy.CauQCnk9.js","/cdn/shopifycloud/checkout-web/assets/c1/MerchandiseModal-legacy.Det73fXH.js","/cdn/shopifycloud/checkout-web/assets/c1/StackedMerchandisePreview-legacy.CLEGVTlY.js","/cdn/shopifycloud/checkout-web/assets/c1/component-ShopPayVerificationSwitch-legacy.D5fWHZWb.js","/cdn/shopifycloud/checkout-web/assets/c1/useSubscribeMessenger-legacy.DRX0L8G_.js","/cdn/shopifycloud/checkout-web/assets/c1/index-legacy.BExoaapp.js","/cdn/shopifycloud/checkout-web/assets/c1/PayButtonSection-legacy.DSTBilg_.js"];
      var styles = [];
      var fontPreconnectUrls = [];
      var fontPrefetchUrls = [];
      var imgPrefetchUrls = [];

      function preconnect(url, callback) {
        var link = document.createElement('link');
        link.rel = 'dns-prefetch preconnect';
        link.href = url;
        link.crossOrigin = '';
        link.onload = link.onerror = callback;
        document.head.appendChild(link);
      }

      function preconnectAssets() {
        var resources = [cdnOrigin].concat(fontPreconnectUrls);
        var index = 0;
        (function next() {
          var res = resources[index++];
          if (res) preconnect(res, next);
        })();
      }

      function prefetch(url, as, callback) {
        var link = document.createElement('link');
        if (link.relList.supports('prefetch')) {
          link.rel = 'prefetch';
          link.fetchPriority = 'low';
          link.as = as;
          if (as === 'font') link.type = 'font/woff2';
          link.href = url;
          link.crossOrigin = '';
          link.onload = link.onerror = callback;
          document.head.appendChild(link);
        } else {
          var xhr = new XMLHttpRequest();
          xhr.open('GET', url, true);
          xhr.onloadend = callback;
          xhr.send();
        }
      }

      function prefetchAssets() {
        var resources = [].concat(
          scripts.map(function(url) { return [url, 'script']; }),
          styles.map(function(url) { return [url, 'style']; }),
          fontPrefetchUrls.map(function(url) { return [url, 'font']; }),
          imgPrefetchUrls.map(function(url) { return [url, 'image']; })
        );
        var index = 0;
        function run() {
          var res = resources[index++];
          if (res) prefetch(res[0], res[1], next);
        }
        var next = (self.requestIdleCallback || setTimeout).bind(self, run);
        next();
      }

      function onLoaded() {
        try {
          if (parseFloat(navigator.connection.effectiveType) > 2 && !navigator.connection.saveData) {
            preconnectAssets();
            prefetchAssets();
          }
        } catch (e) {}
      }

      if (document.readyState === 'complete') {
        onLoaded();
      } else {
        addEventListener('load', onLoaded);
      }
    })();
  